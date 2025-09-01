import styled from 'styled-components';

export const Overlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(2px);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 40;
	animation: fadeIn 0.3s ease-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const DialogContainer = styled.div`
	background: ${({ theme }) => theme.colors.neutral[0]};
	box-shadow: ${({ theme }) => theme.shadows[32]};
	border-radius: 8px;
	padding: 20px;
	width: 100%;
	max-width: 880px;
	max-height: 90vh;
	overflow-y: auto;
	animation: scaleIn 0.3s ease-out;

	@keyframes scaleIn {
		from {
			opacity: 0;
			transform: translateY(20px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
`;
