import { CheckBox } from '@/components/checkbox';
import { ContainerLayout } from '@/components/container';

export const HomePage: React.FC = () => {
	return (
		<ContainerLayout>
			<CheckBox name="test" label="Label" />
		</ContainerLayout>
	);
};
