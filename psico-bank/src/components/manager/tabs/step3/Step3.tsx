import { theme } from '@/theme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, FormProvider, useForm } from 'react-hook-form';

import { AlertBox } from '@/components/alert';
import { CheckBox } from '@/components/checkbox';
import { TextInput } from '@/components/inputs';
import { clickNextButtonListen, nextStepListen } from '@/components/manager';

import { ManagerStep3TabFormValues, step3Schema } from './schema';
import { DescriptionLabel, DescriptionLabelRequired, Divider, FormWrapper, Subtitle } from './styles';

export const ManagerStep3Tab: React.FC<{}> = () => {
	const methods = useForm<ManagerStep3TabFormValues>({
		resolver: zodResolver(step3Schema)
	});

	const onHandleSubmit = (data: ManagerStep3TabFormValues) => {
		nextStepListen.emit({
			step: 3,
			data
		});
	};

	const handleNextStep = () => {
		methods.handleSubmit(onHandleSubmit)();
	};

	clickNextButtonListen.listen(data => {
		if (data.step == 2) handleNextStep();
	});

	return (
		<FormProvider {...methods}>
			<FormWrapper>
				<Subtitle>Forma de pagamento da cobrança</Subtitle>
				<AlertBox
					description="Escolha quais as opções de pagamento que estarão disponíveis para o seu cliente no link das mensagens de cobrança;"
					color={theme.colors.feedback.information.light}
					textColor={theme.colors.feedback.information.medium}
				/>
				<DescriptionLabel>
					Disponibilizar meios de pagamento: <DescriptionLabelRequired>*</DescriptionLabelRequired>
				</DescriptionLabel>
				<Controller
					name="methods"
					control={methods.control}
					defaultValue={[]}
					render={({ field }) => (
						<>
							{[
								{ name: 'Pix', value: 'pix' },
								{ name: 'Cartão de crédito', value: 'credit-card' },
								{ name: 'Boleto Bancário', value: 'bank-slip' }
							].map(option => (
								<CheckBox
									key={option.value}
									name={field.name}
									label={option.name}
									checked={field.value?.includes(option.value)}
									onChange={checked => {
										if (checked) {
											field.onChange([...(field.value || []), option.value]);
										} else {
											field.onChange(field.value.filter((v: string) => v !== option.value));
										}
									}}
								/>
							))}
						</>
					)}
				/>
				<Divider />
				<DescriptionLabel>Definir multas e juros para todos os boletos após o vencimento</DescriptionLabel>
				<Controller
					name="fine"
					control={methods.control}
					defaultValue={false}
					render={({ field }) => (
						<CheckBox
							name={field.name}
							label="Cobrar multa"
							checked={field.value}
							onChange={field.onChange}
						/>
					)}
				/>
				<TextInput
					label="Valor da multa em %:"
					type="number"
					defaultValue={0}
					{...methods.register('fineValue')}
				/>
				<Controller
					name="interest"
					control={methods.control}
					defaultValue={false}
					render={({ field }) => (
						<CheckBox
							name={field.name}
							label="Cobrar juros por dia de atraso (valor 1% ao mês)"
							checked={field.value}
							onChange={field.onChange}
						/>
					)}
				/>
			</FormWrapper>
		</FormProvider>
	);
};
