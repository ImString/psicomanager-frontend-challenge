import { theme } from '@/theme';

import { AlertBox } from '@/components/alert';
import { CheckBox } from '@/components/checkbox';
import { TextInput } from '@/components/inputs';

import { DescriptionLabel, DescriptionLabelRequired, Divider, FormWrapper, Subtitle } from './styles';

interface ManagerStep3TabProps {}

export const ManagerStep3Tab: React.FC<ManagerStep3TabProps> = props => {
	return (
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
			<CheckBox label="Pix" name="pix" />
			<CheckBox label="Cartão de crédito" name="credit-card" />
			<CheckBox label="Boleto Bancário" name="bank-slip" />
			<Divider />
			<DescriptionLabel>Definir multas e juros para todos os boletos após o vencimento</DescriptionLabel>
			<CheckBox label="Cobrar multa" name="fine" />
			<TextInput label="Valor da multa em %:" type="number" defaultValue={0} />
			<CheckBox label="Cobrar juros por dia de atraso (valor 1% ao mês)" name="interest" />
		</FormWrapper>
	);
};
