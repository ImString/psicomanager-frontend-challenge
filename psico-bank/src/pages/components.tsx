import { MdAdd } from 'react-icons/md';

import { Button } from '@/components/button';
import { CheckBox } from '@/components/checkbox';
import { ContainerLayout } from '@/components/container';
import { DropdownSelect } from '@/components/dropdown-select';
import { TextInput } from '@/components/inputs';

export const ComponentsPage: React.FC = () => {
	return (
		<ContainerLayout>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				<div>
					<CheckBox name="test" label="Label" />
				</div>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Button label="Próximo" theme="primary" />
					<Button label="Inserir" icon={MdAdd} theme="secondary" />
					<Button label="Cancelar" theme="tertiary" />
				</div>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Button label="Próximo" theme="primary" disabled />
					<Button label="Inserir" icon={MdAdd} theme="secondary" disabled />
					<Button label="Cancelar" theme="tertiary" disabled />
				</div>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<Button label="Próximo" theme="primary" loading />
					<Button label="Inserir" icon={MdAdd} theme="secondary" loading />
					<Button label="Cancelar" theme="tertiary" loading />
				</div>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<DropdownSelect
						label="Label"
						placeholder="-- Selecione --"
						options={[
							{ value: '1', label: 'Opção 1' },
							{ value: '2', label: 'Opção 2' },
							{ value: '3', label: 'Opção 3', disabled: true },
							{ value: '4', label: 'Opção 4' },
							{ value: '5', label: 'Opção 5' },
							{ value: '6', label: 'Opção 6' },
							{ value: '7', label: 'Opção 7' },
							{ value: '8', label: 'Opção 8' },
							{ value: '9', label: 'Opção 9' },
							{ value: '10', label: 'Opção 10' }
						]}
						onChange={val => console.log('Selecionado:', val)}
					/>
					<DropdownSelect
						label="Label"
						placeholder="-- Selecione --"
						options={[
							{ value: '1', label: 'Opção 1' },
							{ value: '2', label: 'Opção 2' },
							{ value: '3', label: 'Opção 3', disabled: true }
						]}
						onChange={val => console.log('Selecionado:', val)}
						disabled
					/>
				</div>
				<div style={{ display: 'flex', gap: '1rem' }}>
					<TextInput
						label="E-mail"
						placeholder="Digite aqui"
						onClickButton={async () => console.log('Apertei enter no texto')}
					/>
					<TextInput
						label="E-mail"
						placeholder="Digite aqui"
						defaultValue={'email-teste@gmail.com'}
						onClickButton={async () => console.log('Apertei enter no texto')}
					/>
					<TextInput label="E-mail" placeholder="Digite aqui" disabled />
				</div>
			</div>
		</ContainerLayout>
	);
};
