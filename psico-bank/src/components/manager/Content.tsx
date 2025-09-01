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
					options={[{ value: 'item-1', label: 'Josão Silva' }]}
					defaultValue="item-1"
					interfaceOptions={{ width: '100%' }}
					required
					disabled
				/>
			</FormItem>
			<FormItem>
				<DropdownSelect
					label="Banco"
					placeholder="Selecione"
					options={[
						{ value: 'item-1', label: 'Banco do Brasil' },
						{ value: 'item-2', label: 'Bradesco' },
						{ value: 'item-3', label: 'Caixa Econômica' },
						{ value: 'item-4', label: 'Itaú' },
						{ value: 'item-5', label: 'Inter' },
						{ value: 'item-6', label: 'Santander' }
					]}
					interfaceOptions={{ width: '100%' }}
					required
				/>
				<DropdownSelect
					label="Tipo de conta:"
					placeholder="Selecione"
					options={[
						{ value: 'item-1', label: 'Conta corrente' },
						{ value: 'item-2', label: 'Poupança' }
					]}
					interfaceOptions={{ width: '100%' }}
					required
				/>
			</FormItem>
			<FormItem>
				<TextInput label="Agência:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} required />
				<TextInput
					label="Conta com dígito:"
					placeholder="Digite aqui"
					interfaceOptions={{ width: '100%' }}
					required
				/>
			</FormItem>
			<FormItem>
				<DropdownSelect
					label="Tipo de pessoa"
					placeholder="Selecione"
					options={[
						{ value: 'item-1', label: 'Pessoa Física' },
						{ value: 'item-2', label: 'Pessoa Jurídica' }
					]}
					interfaceOptions={{ width: '100%' }}
					required
				/>
				<TextInput label="CPF" placeholder="___.___.___-__" interfaceOptions={{ width: '100%' }} required />
				<TextInput
					label="Telefone"
					placeholder="(__) _____-____"
					interfaceOptions={{ width: '100%' }}
					required
				/>
			</FormItem>
			<FormItem>
				<TextInput
					label="Nome completo:"
					placeholder="Digite aqui"
					interfaceOptions={{ width: '100%' }}
					required
				/>
			</FormItem>
			<FormItem>
				<TextInput label="CEP:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} required />
				<DropdownSelect
					label="Estado:"
					placeholder="Selecione"
					options={[
						{ value: 'AC', label: 'Acre' },
						{ value: 'AL', label: 'Alagoas' },
						{ value: 'AP', label: 'Amapá' },
						{ value: 'AM', label: 'Amazonas' },
						{ value: 'BA', label: 'Bahia' },
						{ value: 'CE', label: 'Ceará' },
						{ value: 'DF', label: 'Distrito Federal' },
						{ value: 'ES', label: 'Espírito Santo' },
						{ value: 'GO', label: 'Goiás' },
						{ value: 'MA', label: 'Maranhão' },
						{ value: 'MT', label: 'Mato Grosso' },
						{ value: 'MS', label: 'Mato Grosso do Sul' },
						{ value: 'MG', label: 'Minas Gerais' },
						{ value: 'PA', label: 'Pará' },
						{ value: 'PB', label: 'Paraíba' },
						{ value: 'PR', label: 'Paraná' },
						{ value: 'PE', label: 'Pernambuco' },
						{ value: 'PI', label: 'Piauí' },
						{ value: 'RJ', label: 'Rio de Janeiro' },
						{ value: 'RN', label: 'Rio Grande do Norte' },
						{ value: 'RS', label: 'Rio Grande do Sul' },
						{ value: 'RO', label: 'Rondônia' },
						{ value: 'RR', label: 'Roraima' },
						{ value: 'SC', label: 'Santa Catarina' },
						{ value: 'SP', label: 'São Paulo' },
						{ value: 'SE', label: 'Sergipe' },
						{ value: 'TO', label: 'Tocantins' }
					]}
					interfaceOptions={{ width: '100%' }}
					required
				/>
				<TextInput label="Cidade:" placeholder="Digite aqui" interfaceOptions={{ width: '100%' }} required />
			</FormItem>
			<FormItem>
				<TextInput label="Endereço:" placeholder="Digite aqui" interfaceOptions={{ width: '65%' }} required />
				<TextInput label="Número:" placeholder="Digite aqui" interfaceOptions={{ width: '35%' }} required />
			</FormItem>
		</FormWrapper>
	);
};
