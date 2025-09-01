import { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';

import { InterfaceOptionsProps } from '@/utils';

import { Container, Label, SelectBox, SelectedValue, Icon, OptionsList, Option } from './styles';

interface DropdownSelectProps {
	label?: string;
	placeholder?: string;
	options: { value: string; label: string; disabled?: boolean }[];
	disabled?: boolean;
	interfaceOptions?: InterfaceOptionsProps;
	onChange?: (value: string) => void;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = props => {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState<string | null>(null);

	const handleSelect = (value: string) => {
		setSelected(value);
		setIsOpen(false);
		props.onChange?.(value);
	};

	return (
		<Container $interfaceOptions={props.interfaceOptions || {}}>
			{props.label && <Label>{props.label}</Label>}

			<SelectBox
				onClick={() => !props.disabled && setIsOpen(prev => !prev)}
				$disabled={props.disabled}
				$open={isOpen}>
				<SelectedValue $placeholder={!selected}>
					{selected ? props.options.find(opt => opt.value === selected)?.label : props.placeholder}
				</SelectedValue>
				<Icon $open={isOpen}>
					<BsCaretDownFill />
				</Icon>
			</SelectBox>

			{isOpen && (
				<OptionsList className="custom-cursor-dropdown">
					{props.options.map(opt => (
						<Option
							key={opt.value}
							onClick={() => !opt.disabled && handleSelect(opt.value)}
							$disabled={opt.disabled}>
							{opt.label}
						</Option>
					))}
				</OptionsList>
			)}
		</Container>
	);
};
