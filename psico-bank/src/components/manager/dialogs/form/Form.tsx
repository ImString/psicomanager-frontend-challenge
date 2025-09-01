import { toast } from 'react-toastify';

import { AlertBox } from '@/components/alert';
import { Button } from '@/components/button';
import { CenteredDialog } from '@/components/dialogs';
import { DropdownSelect } from '@/components/dropdown-select';
import {
	clickNextButtonListen,
	ManagerStep1Tab,
	ManagerStep2Tab,
	ManagerStep3Tab,
	nextStepListen
} from '@/components/manager';
import { StepDetails, Stepper } from '@/components/stepper';

import { useStateRef } from '@/utils';

import { FormItem } from './styles';
import { Buttons, CloseIcon, Footer, Header, Subtitle, Title } from './styles';

interface ManagerFormDialogProps {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
}

export const ManagerFormDialog: React.FC<ManagerFormDialogProps> = props => {
	const [currentStep, setCurrentStep, currentStepRef] = useStateRef(0);
	const [stepsData, setStepsData, stepsDataRef] = useStateRef<{ step: number; data: any }[]>([]);

	const stepperDetails: StepDetails[] = [
		{ title: 'Cadastrar uma conta' },
		{ title: 'Canais de envio e Mensagem de cobrança' },
		{ title: 'Forma de pagamento da cobrança' }
	];

	const handleNextSubmit = () => {
		setCurrentStep(current => current + 1);
	};

	const handleCancelSubmit = () => {
		setCurrentStep(0);
		setStepsData([]);
		props.setIsOpen(false);
	};

	nextStepListen.listen(data => {
		console.log(data);
		setStepsData(stepsData => [...stepsData, data]);

		if (currentStepRef.current < stepperDetails.length - 1) {
			handleNextSubmit();
		} else {
			console.log('Acabou!', stepsDataRef.current);
			toast.success('PsicoBank ativado!');
			handleCancelSubmit();
		}
	});

	return (
		<CenteredDialog isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
			<Header>
				<Title>Ativar o PsicoBank</Title>
				<CloseIcon onClick={() => props.setIsOpen(false)} />
			</Header>
			<Stepper activeStep={currentStep} stepperDetails={stepperDetails} />
			<Subtitle>Preencha os itens a seguir para configurar o PsicoBank</Subtitle>
			{currentStep === 0 && (
				<AlertBox
					title="Atenção!!! Verifique atentamente a cada dado preenchido no cadastro de sua conta."
					list={[
						'Caso queira cadastrar uma conta de banco CNPJ, verifique se a sua conta corrente é CNPJ e preencha o CPF correto do responsável da conta.',
						'O preenchimento incorreto das informações pode trazer transtornos no momento da transferência do valor para essa conta corrente.',
						'Se possível preencha com calma para não ocorrer erros.'
					]}
				/>
			)}

			<FormItem>
				<DropdownSelect
					label="Profissional"
					options={[{ value: 'item-1', label: 'Josão Silva' }]}
					defaultValue="item-1"
					interfaceOptions={{ width: '100%' }}
					required
					disabled
				/>
			</FormItem>

			{currentStep === 0 && <ManagerStep1Tab />}
			{currentStep === 1 && <ManagerStep2Tab />}
			{currentStep === 2 && <ManagerStep3Tab />}

			<Footer>
				<Buttons>
					<Button label="Cancelar" theme="tertiary" onClick={() => handleCancelSubmit()} />
					<Button
						label="Próximo"
						theme="primary"
						onClick={() => clickNextButtonListen.emit({ step: currentStep })}
					/>
				</Buttons>
			</Footer>
		</CenteredDialog>
	);
};
