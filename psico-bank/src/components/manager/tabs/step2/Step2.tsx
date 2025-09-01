import { theme } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { MdAdd } from 'react-icons/md';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

import { AlertBox } from '@/components/alert';
import { Button } from '@/components/button';
import { DropdownSelect } from '@/components/dropdown-select';
import { clickNextButtonListen, nextStepListen } from '@/components/manager';

import { ManagerStep2TabFormValues, step2Schema } from './schema';
import { ErrorMessage, FormItem, FormWrapper, Label, LabelWrapper, Subtitle, TextArea } from './styles';

type DynamicMarkOptions = 'customer-name' | 'customer-cpf' | 'customer-phone';

export const ManagerStep2Tab: React.FC = () => {
	const quillRef = useRef<ReactQuill | null>(null);
	const [dynamicMark, setDynamicMark] = useState<DynamicMarkOptions>();

	const methods = useForm<ManagerStep2TabFormValues>({
		resolver: zodResolver(step2Schema),
		mode: 'onChange',
		defaultValues: {
			message:
				'Olá {{NOME_CLIENTE}}, Estou te mandando um link no qual você consegue ver a melhor forma de pagamento das nossas sessões. Obrigado!'
		}
	});

	const onHandleSubmit = (data: ManagerStep2TabFormValues) => {
		nextStepListen.emit({
			step: 2,
			data
		});
	};

	const handleNextStep = () => {
		methods.handleSubmit(onHandleSubmit)();
	};

	clickNextButtonListen.listen(data => {
		if (data.step == 1) handleNextStep();
	});

	const insertButtonSubmit = () => {
		const quill = quillRef.current?.getEditor();
		if (!quill || !dynamicMark) return;

		let markName = '';
		if (dynamicMark === 'customer-name') markName = 'NOME_CLIENTE';
		if (dynamicMark === 'customer-cpf') markName = 'CPF_CLIENTE';
		if (dynamicMark === 'customer-phone') markName = 'TELEFONE_CLIENTE';
		markName = `{{${markName}}}`;

		const range = quill.getSelection(true);
		quill.insertText(range ? range.index : 0, markName);
		quill.setSelection((range ? range.index : 0) + markName.length, 0);
		methods.setValue('message', quill.getText());
	};

	return (
		<FormProvider {...methods}>
			<FormWrapper>
				<Subtitle>Enviar cobrança por e-mail:</Subtitle>
				<AlertBox
					description="Esse é a mensagem por e-mail que seus clientes irão receber. Clique no campo de texto para editar o conteúdo da mensagem e depois siga para o próximo passo."
					color={theme.colors.feedback.information.light}
					textColor={theme.colors.feedback.information.medium}
				/>
				<FormItem>
					<DropdownSelect
						label="Marcação dinâmica:"
						placeholder="--Selecione--"
						options={[
							{ value: 'customer-name', label: 'Nome do Cliente' },
							{ value: 'customer-cpf', label: 'CPF do Cliente' },
							{ value: 'customer-phone', label: 'Telefone do Cliente' }
						]}
						name="dynamic-mark"
						onChange={async value => setDynamicMark(value.target.value)}
						interfaceOptions={{ width: '100%' }}
					/>
					<div>
						<Button label="Inserir" icon={MdAdd} theme="secondary" onClick={() => insertButtonSubmit()} />
					</div>
				</FormItem>
				<LabelWrapper>
					<Label>Conteúdo da mensagem:</Label>
					<TextArea
						ref={quillRef}
						theme="snow"
						defaultValue={methods.getValues('message')}
						onChange={html => methods.setValue('message', html, { shouldValidate: true })}
					/>
					{methods.formState.errors.message && (
						<ErrorMessage>{methods.formState.errors.message.message}</ErrorMessage>
					)}
				</LabelWrapper>
			</FormWrapper>
		</FormProvider>
	);
};
