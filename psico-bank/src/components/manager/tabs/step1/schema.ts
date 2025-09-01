import z from 'zod';

const errors = {
	invalidBank: 'Informe um banco válido',
	invalidType: 'Informe um tipo de conta',
	invalidTypeOfPerson: 'Informe o tipo de pessoa',
	invalidCpf: 'Informe um CPF válido',
	invalidCnpj: 'Informe um CNPJ válido',
	invalidPhone: 'Informe um telefone válido',
	invalidFullName: 'Informe um nome completo',
	invalidRazaoSocial: 'Informe a razão social',
	invalidZipCode: 'Informe um CEP válido',
	invalidState: 'Informe um estado',
	invalidCity: 'Informe uma cidade',
	invalidAddress: 'Informe uma rua',
	invalidAddressNumber: 'Informe um número',
	invalidResponsibleName: 'Informe o nome do responsável',
	invalidResponsibleCpf: 'Informe o CPF do responsável'
};

const baseFields = {
	accountBank: z.string().nonempty(errors.invalidBank),
	accountType: z.string().nonempty(errors.invalidType),
	accountAgency: z.string().nonempty(errors.invalidType),
	accountWithDigit: z.string().nonempty(errors.invalidType),
	phone: z.string().nonempty(errors.invalidPhone),
	zipCode: z.string().nonempty(errors.invalidZipCode),
	stateCity: z.string().nonempty(errors.invalidState),
	city: z.string().nonempty(errors.invalidCity),
	address: z.string().nonempty(errors.invalidAddress),
	addressNumber: z.string().nonempty(errors.invalidAddressNumber)
};

const pessoaFisicaSchema = z.object({
	typeOfPerson: z.literal('pessoa-fisica', { error: errors.invalidTypeOfPerson }),
	...baseFields,
	cpf: z.string().nonempty(errors.invalidCpf),
	fullName: z.string().nonempty(errors.invalidFullName)
});

const pessoaJuridicaSchema = z.object({
	typeOfPerson: z.literal('pessoa-juridica', { error: errors.invalidTypeOfPerson }),
	...baseFields,
	cnpj: z.string().nonempty(errors.invalidCnpj),
	razaoSocial: z.string().nonempty(errors.invalidRazaoSocial),
	responsavelNome: z.string().nonempty(errors.invalidResponsibleName),
	responsavelCpf: z.string().nonempty(errors.invalidResponsibleCpf)
});

export const step1Schema = z.discriminatedUnion('typeOfPerson', [pessoaFisicaSchema, pessoaJuridicaSchema]);

export type ManagerStep1TabFormValues = z.infer<typeof step1Schema>;
