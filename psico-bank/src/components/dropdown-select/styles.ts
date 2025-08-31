import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6px;
	width: 220px;
	position: relative;
	font-family: 'Roboto', sans-serif;
`;

export const Label = styled.label`
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.neutral[90]};
`;

export const SelectBox = styled.div<{ $disabled?: boolean; $open?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 12px;
	border: 1px solid ${({ theme }) => theme.colors.neutral[30]};
	border-radius: 4px;
	background: ${({ $disabled, theme }) => ($disabled ? theme.colors.neutral[10] : theme.colors.neutral[0])};
	cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
	color: ${({ $disabled, theme }) => ($disabled ? theme.colors.neutral[30] : theme.colors.neutral[60])};
	transition: all 0.2s;

	${({ $disabled }) =>
		!$disabled &&
		css`
			&:hover {
				border-color: ${({ theme }) => theme.colors.neutral[90]};
			}
		`}

	${({ $open, theme }) =>
		$open &&
		css`
			border-color: ${theme.colors.primary[0]};
		`}
`;

export const SelectedValue = styled.span<{ $placeholder?: boolean }>`
	color: ${({ $placeholder, theme }) => ($placeholder ? theme.colors.neutral[50] : theme.colors.neutral[90])};
`;

export const Icon = styled.span<{ $open?: boolean }>`
	display: flex;
	transition: transform 0.2s;
	color: ${({ theme }) => theme.colors?.neutral?.[60]};
	${({ $open }) =>
		$open &&
		css`
			transform: rotate(180deg);
		`}
`;

export const OptionsList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	margin-top: 4px;
	background: ${({ theme }) => theme.colors?.neutral?.[0] || '#fff'};
	border: 1px solid ${({ theme }) => theme.colors?.neutral?.[20] || '#ddd'};
	box-shadow: ${({ theme }) => theme.shadows[16]};
	max-height: 200px;
	overflow-y: auto;
	z-index: 100;
`;

export const Option = styled.li<{ $disabled?: boolean }>`
	padding: 10px 10px;
	cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
	font-size: 14px;
	color: ${({ $disabled, theme }) => ($disabled ? theme.colors.neutral[40] : theme.colors.neutral[70])};

	&:hover {
		${({ $disabled, theme }) =>
			!$disabled &&
			css`
				background: ${theme.colors.primary[0]};
				color: ${theme.colors.neutral[0]};
			`}
	}
`;
