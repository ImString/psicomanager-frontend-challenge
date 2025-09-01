import z from 'zod';

import { validateCNPJ, validateCPF } from '@/utils';

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
	accountAgency: z.string(errors.invalidAgency).nonempty(errors.invalidAgency).regex(/^\d+$/, errors.invalidAgency),
	accountWithDigit: z.string(errors.invalidAccount).nonempty(errors.invalidAccount),
	phone: z.string(errors.invalidPhone).regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, errors.invalidPhone),
	zipCode: z.string(errors.invalidZipCode).regex(/^\d{5}-?\d{3}$/, errors.invalidZipCode),
	stateCity: z.string(errors.invalidState).nonempty(errors.invalidState),
	city: z.string(errors.invalidCity).nonempty(errors.invalidCity),
	address: z.string(errors.invalidAddress).nonempty(errors.invalidAddress),
	addressNumber: z
		.string(errors.invalidAddressNumber)
		.nonempty(errors.invalidAddressNumber)
		.regex(/^\d+$/, errors.invalidAddressNumber)
};

const pessoaFisicaSchema = z.object({
	typeOfPerson: z.literal('pessoa-fisica'),
	...baseFields,
	cpf: z.string().nonempty(errors.invalidCpf).refine(validateCPF, { message: errors.invalidCpf }),
	fullName: z.string().min(5, errors.invalidFullName)
});

const pessoaJuridicaSchema = z.object({
	typeOfPerson: z.literal('pessoa-juridica'),
	...baseFields,
	cnpj: z.string().nonempty(errors.invalidCnpj).refine(validateCNPJ, { message: errors.invalidCnpj }),
	razaoSocial: z.string().min(3, errors.invalidRazaoSocial),
	responsibleName: z.string().min(5, errors.invalidResponsibleName),
	responsibleCpf: z
		.string()
		.nonempty(errors.invalidResponsibleCpf)
		.refine(validateCPF, { message: errors.invalidResponsibleCpf })
});

export const step1Schema = z.discriminatedUnion('typeOfPerson', [pessoaFisicaSchema, pessoaJuridicaSchema]);

export type ManagerStep1TabFormValues = z.infer<typeof step1Schema>;
