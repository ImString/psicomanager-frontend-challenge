import styled from 'styled-components';

export const FormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	margin-top: 1.25rem;
`;

export const FormItem = styled.div`
	display: flex;
	width: 100%;
	gap: 1.25rem;

	@media (max-width: 768px) {
		flex-direction: column;

		> * {
			width: 100% !important;
		}
	}
`;
