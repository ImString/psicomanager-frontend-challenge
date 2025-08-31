import { theme } from '@/theme';
import { useMemo } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

import { Container, Image } from './styles';

interface NavbarAvatarProps {
	name: string;
}

export const NavbarAvatar: React.FC<NavbarAvatarProps> = props => {
	const avatarURL = useMemo(
		() =>
			`https://ui-avatars.com/api/?name=${encodeURIComponent(props.name)}&background=${theme.colors.neutral[60].replace('#', '')}&color=${theme.colors.neutral[0].replace('#', '')}`,
		[props.name]
	);

	return (
		<Container>
			<Image src={avatarURL} alt="Avatar" />
			<BsCaretDownFill style={{ color: theme.colors.neutral[80] }} />
		</Container>
	);
};
