import { BsBellFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { MdCamera, MdCircle, MdNotifications, MdSearch } from 'react-icons/md';

import { TextInput } from '@/components/inputs';

import { NavbarAvatar } from './avatar';
import { NavbarNotifications } from './notifications';
import {
	CameraIcon,
	Container,
	Content,
	IconBox,
	LeftItens,
	LogoImage,
	LogoSpacer,
	LogoWrapper,
	RightItens,
	SearchWrapper,
	Wrapper
} from './styles';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = props => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<RightItens>
						<LogoWrapper>
							<LogoImage src="/logo.png" alt="PsicoBank" />
							<LogoSpacer />
						</LogoWrapper>
						<SearchWrapper>
							<TextInput placeholder="Buscar cliente" icon={MdSearch} />
						</SearchWrapper>
					</RightItens>
					<LeftItens>
						<IconBox>
							<CameraIcon />
						</IconBox>
						<IconBox>
							<NavbarNotifications count={1} />
						</IconBox>
						<IconBox $customWidth="64px">
							<NavbarAvatar name="Admin User" />
						</IconBox>
					</LeftItens>
				</Content>
			</Container>
		</Wrapper>
	);
};
