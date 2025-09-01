import { theme } from '@/theme';
import { MdAdd } from 'react-icons/md';

import { AlertBox } from '@/components/alert';
import { Button } from '@/components/button';
import { DropdownSelect } from '@/components/dropdown-select';

import { FormItem, FormWrapper, Subtitle } from './styles';

interface ManagerStep2TabProps {}

export const ManagerStep2Tab: React.FC<ManagerStep2TabProps> = props => {
	return (
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
						{ value: 'item-1', label: 'Nome do Cliente' },
						{ value: 'item-2', label: 'CPF do Cliente' },
						{ value: 'item-3', label: 'Telefone do Cliente' }
					]}
					interfaceOptions={{ width: '100%' }}
				/>
				<div>
					<Button label="Inserir" icon={MdAdd} theme="secondary" />
				</div>
			</FormItem>
		</FormWrapper>
	);
};
