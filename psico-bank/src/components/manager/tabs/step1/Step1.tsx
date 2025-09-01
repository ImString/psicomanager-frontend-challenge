import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm, useFormContext } from 'react-hook-form';

import { DropdownSelect } from '@/components/dropdown-select';
import { TextInput } from '@/components/inputs';
import { clickNextButtonListen, nextStepListen } from '@/components/manager';

import { ManagerStep1TabFormValues, step1Schema } from './schema';
import { FormItem, FormWrapper } from './styles';

export const ManagerStep1Tab: React.FC = () => {
	const methods = useForm<ManagerStep1TabFormValues>({
		resolver: zodResolver(step1Schema)
	});

	const { watch } = methods;
	const typeOfPerson = watch('typeOfPerson');

	const onHandleSubmit = (data: ManagerStep1TabFormValues) => {
		nextStepListen.emit({
			step: 1,
			data
		});
	};

	const handleNextStep = () => {
		methods.handleSubmit(onHandleSubmit)();
	};

	clickNextButtonListen.listen(data => {
		if (data.step == 0) handleNextStep();
	});

	return (
		<FormProvider {...methods}>
			<FormWrapper>
				<FormItem>
					<DropdownSelect
						label="Banco"
						placeholder="Selecione"
						options={[
							{ value: 'banco-do-Brasil', label: 'Banco do Brasil' },
							{ value: 'bradesco', label: 'Bradesco' },
							{ value: 'caixa-economica', label: 'Caixa Econômica' },
							{ value: 'itau', label: 'Itaú' },
							{ value: 'inter', label: 'Inter' },
							{ value: 'santander', label: 'Santander' }
						]}
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('accountBank')}
					/>
					<DropdownSelect
						label="Tipo de conta:"
						placeholder="Selecione"
						options={[
							{ value: 'conta-corrent', label: 'Conta corrente' },
							{ value: 'poupanca', label: 'Poupança' }
						]}
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('accountType')}
					/>
				</FormItem>

				<FormItem>
					<TextInput
						label="Agência:"
						placeholder="Digite aqui"
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('accountAgency')}
					/>
					<TextInput
						label="Conta com dígito:"
						placeholder="Digite aqui"
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('accountWithDigit')}
					/>
				</FormItem>

				<FormItem>
					<DropdownSelect
						label="Tipo de pessoa"
						placeholder="Selecione"
						options={[
							{ value: 'pessoa-fisica', label: 'Pessoa Física' },
							{ value: 'pessoa-juridica', label: 'Pessoa Jurídica' }
						]}
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('typeOfPerson')}
					/>
				</FormItem>

				{typeOfPerson === 'pessoa-fisica' && (
					<FormItem>
						<TextInput
							label="CPF"
							placeholder="___.___.___-__"
							mask="999.999.999-99"
							interfaceOptions={{ width: '100%' }}
							required
							{...methods.register('cpf')}
						/>
						<TextInput
							label="Nome completo:"
							placeholder="Digite aqui"
							interfaceOptions={{ width: '100%' }}
							required
							{...methods.register('fullName')}
						/>
					</FormItem>
				)}

				{typeOfPerson === 'pessoa-juridica' && (
					<>
						<FormItem>
							<TextInput
								label="Razão Social"
								placeholder="Digite aqui"
								interfaceOptions={{ width: '100%' }}
								required
								{...methods.register('razaoSocial')}
							/>
							<TextInput
								label="CNPJ"
								placeholder="__.___.___/____-__"
								mask="99.999.999/9999-99"
								interfaceOptions={{ width: '100%' }}
								required
								{...methods.register('cnpj')}
							/>
						</FormItem>
						<FormItem>
							<TextInput
								label="Nome do responsável"
								placeholder="Digite aqui"
								interfaceOptions={{ width: '100%' }}
								required
								{...methods.register('responsavelNome')}
							/>
							<TextInput
								label="CPF do responsável"
								placeholder="___.___.___-__"
								interfaceOptions={{ width: '100%' }}
								required
								{...methods.register('responsavelCpf')}
							/>
						</FormItem>
					</>
				)}

				<FormItem>
					<TextInput
						label="Telefone"
						placeholder="(__) _____-____"
						mask="(99) 99999-9999"
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('phone')}
					/>
				</FormItem>

				<FormItem>
					<TextInput
						label="CEP:"
						placeholder="Digite aqui"
						mask="99999-999"
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('zipCode')}
					/>
					<DropdownSelect
						label="Estado:"
						placeholder="Selecione"
						options={[
							{ value: 'AC', label: 'Acre' },
							{ value: 'AL', label: 'Alagoas' },
							{ value: 'AP', label: 'Amapá' },
							{ value: 'AM', label: 'Amazonas' },
							{ value: 'BA', label: 'Bahia' },
							{ value: 'CE', label: 'Ceará' },
							{ value: 'DF', label: 'Distrito Federal' },
							{ value: 'ES', label: 'Espírito Santo' },
							{ value: 'GO', label: 'Goiás' },
							{ value: 'MA', label: 'Maranhão' },
							{ value: 'MT', label: 'Mato Grosso' },
							{ value: 'MS', label: 'Mato Grosso do Sul' },
							{ value: 'MG', label: 'Minas Gerais' },
							{ value: 'PA', label: 'Pará' },
							{ value: 'PB', label: 'Paraíba' },
							{ value: 'PR', label: 'Paraná' },
							{ value: 'PE', label: 'Pernambuco' },
							{ value: 'PI', label: 'Piauí' },
							{ value: 'RJ', label: 'Rio de Janeiro' },
							{ value: 'RN', label: 'Rio Grande do Norte' },
							{ value: 'RS', label: 'Rio Grande do Sul' },
							{ value: 'RO', label: 'Rondônia' },
							{ value: 'RR', label: 'Roraima' },
							{ value: 'SC', label: 'Santa Catarina' },
							{ value: 'SP', label: 'São Paulo' },
							{ value: 'SE', label: 'Sergipe' },
							{ value: 'TO', label: 'Tocantins' }
						]}
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('stateCity')}
					/>
					<TextInput
						label="Cidade:"
						placeholder="Digite aqui"
						interfaceOptions={{ width: '100%' }}
						required
						{...methods.register('city')}
					/>
				</FormItem>

				<FormItem>
					<TextInput
						label="Endereço:"
						placeholder="Digite aqui"
						interfaceOptions={{ width: '65%' }}
						required
						{...methods.register('address')}
					/>
					<TextInput
						label="Número:"
						placeholder="Digite aqui"
						mask="999999"
						interfaceOptions={{ width: '35%' }}
						required
						{...methods.register('addressNumber')}
					/>
				</FormItem>
			</FormWrapper>
		</FormProvider>
	);
};
