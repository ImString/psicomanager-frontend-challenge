import { DropdownSelect } from '../dropdown-select';
import { TextInput } from '../inputs';
import { FormItem, FormWrapper } from './styles';

interface ManagerContentProps {}

export const ManagerContent: React.FC<ManagerContentProps> = props => {
	return (
		<FormWrapper>
			<FormItem>
				<DropdownSelect
					label="Profissional"
					options={[{ value: '1', label: 'Josão Silva' }]}
					interfaceOptions={{ width: '100%' }}
					disabled
				/>
			</FormItem>
			<FormItem>
				<DropdownSelect
					label="Banco"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
					interfaceOptions={{ width: '100%' }}
				/>
				<DropdownSelect
					label="Tipo de conta:"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
					interfaceOptions={{ width: '100%' }}
				/>
			</FormItem>
			<FormItem>
				<TextInput label="Agência:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} />
				<TextInput label="Conta com dígito:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} />
			</FormItem>
			<FormItem>
				<DropdownSelect
					label="Tipo de pessoa"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
					interfaceOptions={{ width: '100%' }}
				/>
				<TextInput label="CPF" placeholder="___.___.___-__" interfaceOptions={{ width: '100%' }} />
				<TextInput label="Telefone" placeholder="(__) _____-____" interfaceOptions={{ width: '100%' }} />
			</FormItem>
			<FormItem>
				<TextInput label="Nome completo:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} />
			</FormItem>
			<FormItem>
				<TextInput label="CEP:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} />
				<DropdownSelect
					label="Estado:"
					placeholder="Selecione"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
					interfaceOptions={{ width: '100%' }}
				/>
				<DropdownSelect
					label="Cidade:"
					placeholder="Selecione"
					options={[{ value: '1', label: 'Josão Silva', disabled: true }]}
					interfaceOptions={{ width: '100%' }}
				/>
			</FormItem>
			<FormItem>
				<TextInput label="Endereço:" placeholder="Digite aqui" interfaceOptions={{ width: '65%' }} />
				<TextInput label="Número:" placeholder="Digite aqui" interfaceOptions={{ width: '35%' }} />
			</FormItem>
		</FormWrapper>
	);
};
