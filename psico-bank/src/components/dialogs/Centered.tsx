import { ReactNode } from 'react';

import { DialogContainer, Overlay } from './styles';

interface CenteredDialogsProps {
	children: ReactNode;
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	afterLeave?: () => void;
}

export const CenteredDialog: React.FC<CenteredDialogsProps> = props => {
	return (
		<>
			{props.isOpen && (
				<Overlay onClick={() => props.setIsOpen(false)}>
					<DialogContainer onClick={e => e.stopPropagation()}>{props.children}</DialogContainer>
				</Overlay>
			)}
		</>
	);
};
