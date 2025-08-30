import styled from 'styled-components';

export const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.neutral[90]};
	font-family: 'Roboto', sans-serif;
`;

export const InputWrapper = styled.span`
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

export const Input = styled.input`
	width: 18px;
	height: 18px;
	appearance: none;
	border-radius: 3px;
	border: 2px solid ${({ theme }) => theme.colors.neutral[50]};
	cursor: pointer;
	background-color: white;
	transition: all 0.15s ease;

	&:checked {
		background-color: ${({ theme }) => theme.colors.primary[0]};
		border-color: ${({ theme }) => theme.colors.primary[0]};
	}

	&:checked + svg {
		opacity: 1;
		transform: scale(1);
	}
`;

export const CheckIcon = styled.svg`
	position: absolute;
	pointer-events: none;
	opacity: 0;
	transform: scale(0.8);
	transition:
		opacity 0.15s ease,
		transform 0.15s ease;
`;
