import styled, { css } from 'styled-components';

import { InterfaceOptionsProps } from '@/utils';

export const Container = styled.div<{ $interfaceOptions?: InterfaceOptionsProps }>`
	display: flex;
	flex-direction: column;
	gap: 6px;
	width: ${({ $interfaceOptions }) => ($interfaceOptions?.width ? $interfaceOptions.width : '220px')};
	position: relative;
	font-family: 'Roboto', sans-serif;
`;

export const Label = styled.label<{ $disabled?: boolean }>`
	font-size: 16px;
	line-height: 24px;
	color: ${({ $disabled, theme }) => ($disabled ? theme.colors.neutral[60] : theme.colors.neutral[90])};
`;

export const InputWrapper = styled.div`
	position: relative;
	display: flex;

	input {
		font-size: 16px;
		line-height: 24px;
		font-family: 'Roboto', sans-serif;
	}
`;

export const InputBox = styled.input<{ $hasIcon?: boolean }>`
	width: 100%;
	height: 18px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
	border-radius: 4px;
	background: ${({ disabled, theme }) => (disabled ? theme.colors.neutral[10] : theme.colors.neutral[0])};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	color: ${({ theme }) => theme.colors.neutral[60]};
	transition: all 0.2s;

	${({ $hasIcon }) =>
		$hasIcon
			? css`
					padding-left: 2rem;
				`
			: ''}

	&:focus {
		color: ${({ theme }) => theme.colors.neutral[70]};
		border-color: ${({ theme }) => theme.colors.primary[0]};
	}

	&:hover&:not(:disabled) {
		color: ${({ theme }) => theme.colors.neutral[60]};
		border-color: ${({ theme }) => theme.colors.neutral[90]};
	}
`;
