import z from 'zod';

export const step3Schema = z.object({
	methods: z.array(z.string()).min(1, 'Escolha pelo menos um método de pagamento'),
	fine: z.boolean().default(false).optional(),
	fineValue: z.preprocess(val => (val === '' ? undefined : Number(val)), z.number().optional()),
	interest: z.boolean().default(false).optional()
});

export type ManagerStep3TabFormValues = z.infer<typeof step3Schema>;
