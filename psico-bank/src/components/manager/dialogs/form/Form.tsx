import { AlertBox } from '@/components/alert';
import { Button } from '@/components/button';
import { CenteredDialog } from '@/components/dialogs';
import { ManagerContent } from '@/components/manager';

import { Buttons, CloseIcon, Footer, Header, Subtitle, Title } from './styles';

interface ManagerFormDialogProps {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

export const ManagerFormDialog: React.FC<ManagerFormDialogProps> = props => {
	return (
		<CenteredDialog isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
			<Header>
				<Title>Ativar o PsicoBank</Title>
				<CloseIcon onClick={() => props.setIsOpen(false)} />
			</Header>
			<Subtitle>Preencha os itens a seguir para configurar o PsicoBank</Subtitle>
			<AlertBox
				title="Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de sua conta."
				list={[
					'Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta corrente é CNPJ e preencha o CPF correto do responsável da conta.',
					'O preenchimento incorreto das informações pode trazer transtornos no momento da transferência do valor para essa conta corrente.',
					'Se possível preencha com calma para não ocorrer erros.'
				]}
			/>

			<ManagerContent />

			<Footer>
				<Buttons>
					<Button label="Cancelar" theme="tertiary" onClick={() => props.setIsOpen(false)} />
					<Button label="Próximo" theme="primary" />
				</Buttons>
			</Footer>
		</CenteredDialog>
	);
};
