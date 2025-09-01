import { useEffect, useMemo, useState } from 'react';

import { InterfaceOptionsProps } from '@/utils';

import { Container, Label, LabelRequired } from './styles';

export type BaseInputChildProps<T = any> = {
	value: T;
	setValue: (value: T) => void;
};

export type BaseInputValueState = [any, React.Dispatch<React.SetStateAction<any>>];
export type BaseInputErrorState = [string, React.Dispatch<React.SetStateAction<string>>];
type BaseInputChildren<T = any> = (props: BaseInputChildProps<T>) => React.ReactNode;

export interface BaseInputProps {
	name?: string;
	label?: string;
	valueState?: BaseInputValueState;
	defaultValue?: any;
	preChange?: (value: any) => any;
	onChange?: (value: any) => void;
	children?: BaseInputChildren;
	interfaceOptions?: InterfaceOptionsProps;
	required?: boolean;
	disabled?: boolean;
}

export const BaseInput: React.FC<BaseInputProps> = props => {
	const [inputValue, setInputValue] = props.valueState || useState(props.defaultValue || '');

	const handleChangeValue = (new_value: any) => {
		let newInputValue = new_value;
		if (props.preChange) newInputValue = props.preChange(new_value);

		setInputValue(newInputValue);
	};

	useEffect(() => {
		if (props.defaultValue !== undefined && inputValue !== props.defaultValue)
			handleChangeValue(props.defaultValue);

		return () => {};
	}, [props.defaultValue]);

	useEffect(() => {
		props.onChange?.(inputValue);

		return () => {};
	}, [inputValue]);

	useEffect(() => {
		if (props.onChange) props.onChange(inputValue);
	}, [props.onChange]);

	useEffect(() => {
		if (props.preChange) handleChangeValue(inputValue);
	}, [props.preChange]);

	useEffect(() => {
		let newInputValue = inputValue;

		if (props.preChange || (newInputValue && newInputValue !== inputValue)) handleChangeValue(newInputValue);

		return () => {};
	}, []);

	const childProps = useMemo(
		() => ({
			value: inputValue,
			setValue: handleChangeValue
		}),
		[inputValue]
	);

	return (
		<Container $interfaceOptions={props.interfaceOptions || {}}>
			{props.label && (
				<Label $disabled={props.disabled}>
					{props.label} {props.required && <LabelRequired>*</LabelRequired>}
				</Label>
			)}

			<div>{props.children?.(childProps)}</div>
		</Container>
	);
};
