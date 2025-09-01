import { DropdownSelect } from '../dropdown-select';
import { TextInput } from '../inputs';
import { FormItem, FormWrapper } from './styles';

interface ManagerContentProps {}

export const ManagerContent: React.FC<ManagerContentProps> = props => {
	return (
		<FormWrapper>
			<FormItem>
				<DropdownSelect label="Profissional" options={[{ value: '1', label: 'Josão Silva' }]} disabled />
			</FormItem>
			<FormItem>
				<DropdownSelect label="Banco" options={[{ value: '1', label: 'Josão Silva', disabled: true }]} />
				<DropdownSelect
					label="Tipo de conta:"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
				/>
			</FormItem>
			<FormItem>
				<TextInput label="Agência:" placeholder="Digite aqui" />
				<TextInput label="Conta com dígito:" placeholder="Digite aqui" />
			</FormItem>
			<FormItem>
				<DropdownSelect
					label="Tipo de pessoa"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
				/>
				<TextInput label="CPF" placeholder="___.___.___-__" />
				<TextInput label="Telefone" placeholder="(__) _____-____" />
			</FormItem>
			<FormItem>
				<TextInput label="Nome completo:" placeholder="Digite aqui" />
			</FormItem>
			<FormItem>
				<TextInput label="CEP:" placeholder="Digite aqui" />
				<DropdownSelect
					label="Estado:"
					placeholder="Selecione"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
				/>
				<DropdownSelect
					label="Cidade:"
					placeholder="Selecione"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
				/>
			</FormItem>
			<FormItem>
				<TextInput label="Endereço:" placeholder="Digite aqui" />
				<TextInput label="Número:" placeholder="Digite aqui" />
			</FormItem>
		</FormWrapper>
	);
};
