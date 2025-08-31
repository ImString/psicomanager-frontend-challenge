import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	width: 220px;
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

export const InputBox = styled.input`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
	border-radius: 4px;
	background: ${({ disabled, theme }) => (disabled ? theme.colors.neutral[10] : theme.colors.neutral[0])};
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	color: ${({ disabled, theme }) => (disabled ? theme.colors.neutral[60] : theme.colors.neutral[60])};
	transition: all 0.2s;

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary[0]};
	}

	&:hover&:not(:disabled) {
		border-color: ${({ theme }) => theme.colors.neutral[90]};
	}
`;
