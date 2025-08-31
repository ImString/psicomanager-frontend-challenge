import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SidebarWrapper = styled.div`
	position: fixed;
	z-index: 20;
	height: 100%;
	display: none;

	@media (min-width: 1024px) {
		display: flex;
		flex-shrink: 0;
	}
`;

export const SidebarContainer = styled.div`
	display: flex;
	width: 90px;
	height: calc(100vh - 3.5rem);
	margin-top: 3.5rem;
	flex-direction: column;
	background: ${({ theme }) => theme.colors.neutral[0]};
	border-right: 1px solid ${({ theme }) => theme.colors.neutral[40]};
`;

export const SidebarInner = styled.div`
	display: flex;
	min-height: 0;
	flex: 1;
	flex-direction: column;
	overflow-y: visible;
`;

export const SidebarContent = styled.div`
	flex: 1;
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4px;
`;

export const NavItemWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const NavItem = styled(Link)<{ $active?: boolean }>`
	display: flex;
	flex-direction: column;
	width: 80px;
	height: 62px;
	border-radius: 16px;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.neutral[80]};
	cursor: pointer;
	transition: all 0.2s;
	text-decoration: none;
	gap: 4px;

	${({ $active, theme }) =>
		$active &&
		css`
			background: ${theme.colors.primary[0]};
			color: ${theme.colors.neutral[0]};
		`}

	${({ $active, theme }) =>
		!$active &&
		css`
			&:hover {
				color: ${theme.colors.neutral[70]};
			}
		`}

	svg {
		font-size: 18px;
	}
`;

export const Label = styled.span`
	font-size: 11px;
	font-family: 'Roboto', sans-serif;
`;
