import { useState } from 'react';
import { ChangeHandler, RefCallBack, useFormContext } from 'react-hook-form';
import { BsCaretDownFill } from 'react-icons/bs';

import { InterfaceOptionsProps } from '@/utils';

import {
	Container,
	Label,
	SelectBox,
	SelectedValue,
	Icon,
	OptionsList,
	Option,
	LabelRequired,
	ErrorMessage
} from './styles';

interface DropdownSelectProps {
	label?: string;
	placeholder?: string;
	options: { value: string; label: string; disabled?: boolean }[];
	error?: string;
	defaultValue?: string;
	hideError?: boolean;
	required?: boolean;
	disabled?: boolean;
	interfaceOptions?: InterfaceOptionsProps;

	// react-hook-form controller
	name?: string;
	value?: string;
	onChange?: ChangeHandler;
	onBlur?: ChangeHandler;
	ref?: RefCallBack;
}

export const DropdownSelect: React.FC<DropdownSelectProps> = props => {
	const [isOpen, setIsOpen] = useState(false);
	const [internalValue, setInternalValue] = useState<string | null>(props.defaultValue || null);

	const selected = props.value ?? internalValue;

	const handleSelect = (value: string) => {
		setInternalValue(value);
		if (props.name && props.onChange) props.onChange({ target: { name: props.name, value } });

		setIsOpen(false);
	};

	let inputError: string | undefined;
	try {
		const {
			formState: { errors }
		} = useFormContext();
		inputError = props.name && errors && (errors as any)[props.name]?.message;
	} catch {
		inputError = props.error;
	}

	return (
		<Container $interfaceOptions={props.interfaceOptions || {}}>
			{props.label && (
				<Label>
					{props.label} {props.required && <LabelRequired>*</LabelRequired>}
				</Label>
			)}

			<SelectBox
				onClick={() => !props.disabled && setIsOpen(prev => !prev)}
				$disabled={props.disabled}
				$open={isOpen}
				$hasError={!!inputError}>
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

			{inputError && !props.hideError && <ErrorMessage>{inputError}</ErrorMessage>}
		</Container>
	);
};
