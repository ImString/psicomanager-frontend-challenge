import z from 'zod';

const hasVisibleText = (html: string): boolean => {
	const text = html
		.replace(/<[^>]*>/g, '')
		.replace(/&nbsp;/g, ' ')
		.trim();

	return text.length > 0;
};

export const step2Schema = z.object({
	message: z
		.string()
		.min(1, 'Digite a mensagem')
		.refine(val => hasVisibleText(val), {
			message: 'O conteúdo não pode estar vazio'
		})
});

export type ManagerStep2TabFormValues = z.infer<typeof step2Schema>;
