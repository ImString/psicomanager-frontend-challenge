import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div<{ $hasNavbar?: boolean; $hasSidebarLeft?: boolean }>`
	display: flex;
	min-height: ${({ $hasNavbar }) => ($hasNavbar ? 'calc(100vh - 56px)' : '100vh')};
	min-width: ${({ $hasSidebarLeft }) => ($hasSidebarLeft ? 'calc(100% - 90px)' : '100%')};

	${({ $hasNavbar }) => $hasNavbar && `padding-top: 56px;`}

	${({ $hasSidebarLeft }) =>
		$hasSidebarLeft &&
		css`
			@media (min-width: 768px) {
				padding-left: 90px;
			}
		`}
`;
