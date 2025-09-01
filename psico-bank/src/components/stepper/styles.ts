import styled, { css } from 'styled-components';

import { StepStatus } from './Stepper';

export const Container = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const StepperWrapper = styled.div`
	display: flex;
	position: relative;
	width: 100%;
`;

export const StepWrapper = styled.div<{ status: StepStatus }>`
	flex: 1;
	text-align: center;
	position: relative;

	&:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 12px;
		left: 50%;
		width: 100%;
		height: 2px;
		background: ${({ status, theme }) =>
			status === 'done' || status === 'active' ? theme.colors.primary[20] : theme.colors.neutral[10]};
		z-index: 0;
	}

	svg {
		position: relative;
		z-index: 1;
	}
`;

export const StepLabel = styled.div<{ status: StepStatus }>`
	margin-top: 8px;
	font-size: 14px;
	font-family: 'Roboto', sans-serif;

	${({ status, theme }) =>
		status === 'done' &&
		css`
			color: ${theme.colors.primary[0]};
			font-weight: 700;
		`}

	${({ status, theme }) =>
		status === 'active' &&
		css`
			color: ${theme.colors.neutral[90]};
			font-weight: 700;
		`}

  ${({ status, theme }) =>
		status === 'pending' &&
		css`
			color: ${theme.colors.neutral[40]};
			font-weight: 400;
		`}
`;
