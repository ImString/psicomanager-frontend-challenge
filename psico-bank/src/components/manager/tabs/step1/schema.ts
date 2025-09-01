import z from 'zod';

const errors = {
	invalidBank: 'Informe um banco válido',
	invalidType: 'Informe um tipo de conta',
	invalidAgency: 'Informe uma agência',
	invalidAccount: 'Informe uma conta',
	invalidTypeOfPerson: 'Informe o tipo de pessoa',
	invalidCpf: 'Informe um CPF válido',
	invalidCnpj: 'Informe um CNPJ válido',
	invalidPhone: 'Informe um telefone válido',
	invalidFullName: 'Informe um nome completo',
	invalidRazaoSocial: 'Informe a razão social',
	invalidZipCode: 'Informe um CEP válido',
	invalidState: 'Informe um estado',
	invalidCity: 'Informe uma cidade',
	invalidAddress: 'Informe um endereço',
	invalidAddressNumber: 'Informe um número',
	invalidResponsibleName: 'Informe o nome do responsável',
	invalidResponsibleCpf: 'Informe o CPF do responsável'
};

const baseFields = {
	accountBank: z.string(errors.invalidBank).nonempty(errors.invalidBank),
	accountType: z.string(errors.invalidType).nonempty(errors.invalidType),
	accountAgency: z.string(errors.invalidAgency).nonempty(errors.invalidAgency),
	accountWithDigit: z.string(errors.invalidAccount).nonempty(errors.invalidAccount),
	phone: z.string(errors.invalidPhone).nonempty(errors.invalidPhone),
	zipCode: z.string(errors.invalidZipCode).nonempty(errors.invalidZipCode),
	stateCity: z.string(errors.invalidState).nonempty(errors.invalidState),
	city: z.string(errors.invalidCity).nonempty(errors.invalidCity),
	address: z.string(errors.invalidAddress).nonempty(errors.invalidAddress),
	addressNumber: z.string(errors.invalidAddressNumber).nonempty(errors.invalidAddressNumber)
};

const pessoaFisicaSchema = z.object({
	typeOfPerson: z.literal('pessoa-fisica'),
	...baseFields,
	cpf: z.string().nonempty(errors.invalidCpf),
	fullName: z.string().nonempty(errors.invalidFullName)
});

const pessoaJuridicaSchema = z.object({
	typeOfPerson: z.literal('pessoa-juridica'),
	...baseFields,
	cnpj: z.string().nonempty(errors.invalidCnpj),
	razaoSocial: z.string().nonempty(errors.invalidRazaoSocial),
	responsavelNome: z.string().nonempty(errors.invalidResponsibleName),
	responsavelCpf: z.string().nonempty(errors.invalidResponsibleCpf)
});

export const step1Schema = z.discriminatedUnion('typeOfPerson', [pessoaFisicaSchema, pessoaJuridicaSchema]);

export type ManagerStep1TabFormValues = z.infer<typeof step1Schema>;
