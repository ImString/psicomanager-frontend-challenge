import ReactQuill from 'react-quill-new';
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
	align-items: flex-end;
`;

export const Subtitle = styled.h2`
	font-size: 20px;
	font-weight: 500;
	font-family: 'Roboto', sans-serif;
`;

export const LabelWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const Label = styled.label`
	font-size: 16px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.neutral[90]};
	font-family: 'Roboto', sans-serif;
`;

export const ErrorMessage = styled.span`
	color: ${({ theme }) => theme.colors.feedback.error.medium};
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	font-family: 'Roboto', sans-serif !important;
`;

export const TextArea = styled(ReactQuill)`
	font-family: 'Roboto', sans-serif !important;
`;
