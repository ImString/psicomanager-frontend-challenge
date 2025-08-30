import { MdAdd } from 'react-icons/md';

import { Button } from '@/components/button';
import { CheckBox } from '@/components/checkbox';
import { ContainerLayout } from '@/components/container';

export const HomePage: React.FC = () => {
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
			</div>
		</ContainerLayout>
	);
};
