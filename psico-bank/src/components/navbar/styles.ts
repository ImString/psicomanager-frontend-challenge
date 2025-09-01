import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	position: fixed;
	width: 100%;
	z-index: 30;
`;

export const Container = styled.div`
	width: 100%;
	height: 3.5rem;
	max-height: 3.5rem;
	background-color: ${({ theme }) => theme.colors.neutral[0]};
	border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[40]};
`;

export const Content = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: space-between;
`;

export const RightItens = styled.div`
	display: flex;
	gap: 1rem;
`;

export const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	display: none;

	@media (min-width: 1024px) {
		display: flex;
	}
`;

export const MenuWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding-left: 1rem;

	@media (min-width: 1024px) {
		display: none;
	}
`;

export const Menu = styled(FaBars)`
	cursor: pointer;
`;

export const LogoImage = styled.img`
	width: 137px;
	height: 22px;
	padding-left: 25px;
	padding-right: 16px;
`;

export const LogoSpacer = styled.div`
	width: 1px;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.neutral[10]};
`;

export const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

export const LeftItens = styled.div`
	display: flex;
`;

export const IconBox = styled.div<{ $customWidth?: string }>`
	display: flex;
	width: ${({ $customWidth }) => $customWidth || '50px'};
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const CameraIcon = styled(BsFillCameraVideoFill)`
	font-size: 20px;
	color: ${({ theme }) => theme.colors.primary[40]};
`;
