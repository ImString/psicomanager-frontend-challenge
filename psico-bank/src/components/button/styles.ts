import { Theme } from '@/vite-env';
import styled, { css } from 'styled-components';

import { ButtonTheme } from './types';

const variantStyles = {
	primary: ({ theme }: { theme: Theme }) => css`
		background-color: ${theme.colors.primary[0]};
		color: ${theme.colors.primary[10]};

		&:hover {
			background-color: ${theme.colors.primary[30]};
		}

		&:disabled {
			background-color: ${theme.colors.neutral[30]};
			color: ${theme.colors.neutral[5]};
		}
	`,
	secondary: ({ theme }: { theme: Theme }) => css`
		background-color: ${theme.colors.neutral[0]};
		border: 1px solid ${theme.colors.primary[0]};
		color: ${theme.colors.primary[0]};

		&:hover {
			background-color: ${theme.colors.primary[10]};
			border-color: ${theme.colors.primary[0]};
			color: ${theme.colors.primary[0]};
		}

		&:disabled {
			background-color: ${theme.colors.neutral[5]};
			border-color: ${theme.colors.neutral[30]};
			color: ${theme.colors.neutral[30]};
		}
	`,
	tertiary: ({ theme }: { theme: Theme }) => css`
		background-color: ${theme.colors.neutral[0]};
		border: 1px solid ${theme.colors.neutral[60]};
		color: ${theme.colors.neutral[60]};

		&:hover {
			background-color: ${theme.colors.neutral[0]};
			border-color: ${theme.colors.neutral[90]};
			color: ${theme.colors.neutral[90]};
		}

		&:disabled {
			background-color: ${theme.colors.neutral[5]};
			border-color: ${theme.colors.neutral[30]};
			color: ${theme.colors.neutral[30]};
		}
	`
};

export const ButtonComponent = styled.button<{ $variant?: ButtonTheme }>`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	overflow: hidden;
	border-radius: 8px;
	padding: 0.5rem 1rem 0.5rem 1rem;

	/* text */
	font-size: 16px;
	font-family: 'Roboto', sans-serif;

	/* extra */
	${({ $variant = 'primary', theme }) => variantStyles[$variant]({ theme })}
	&:disabled {
		cursor: not-allowed;
	}

	/* animation */
	transition-duration: 300ms;
	transition-property: all;
`;
