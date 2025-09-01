import styled from 'styled-components';

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	margin-top: 1.25rem;
`;

export const FormItem = styled.div`
	display: flex;
	width: 100%;
	gap: 1.25rem;
	align-items: 'flex-end';
`;

export const Subtitle = styled.h2`
	font-size: 20px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
`;

export const DescriptionLabel = styled.label`
	font-size: 16px;
	font-weight: 700;
	font-family: 'Roboto', sans-serif;
`;

export const DescriptionLabelRequired = styled.label`
	color: ${({ theme }) => theme.colors.feedback.error.medium};
`;

export const Divider = styled.div`
	width: 100%;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.neutral[30]};
`;
