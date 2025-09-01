import { useEffect, useMemo, useState } from 'react';
import { ChangeHandler, RefCallBack, useFormContext } from 'react-hook-form';

import { InterfaceOptionsProps } from '@/utils';

import { Container, ErrorMessage, Label, LabelRequired } from './styles';

export type BaseInputChildProps<T = any> = {
	value: T;
	setValue: (value: T) => void;
	error: string;
};

export type BaseInputValueState = [any, React.Dispatch<React.SetStateAction<any>>];
export type BaseInputErrorState = [string, React.Dispatch<React.SetStateAction<string>>];
type BaseInputChildren<T = any> = (props: BaseInputChildProps<T>) => React.ReactNode;

export interface BaseInputProps {
	label?: string;
	valueState?: BaseInputValueState;
	error?: string;
	defaultValue?: any;
	preChange?: (value: any) => any;
	children?: BaseInputChildren;
	interfaceOptions?: InterfaceOptionsProps;
	hideError?: boolean;
	required?: boolean;
	disabled?: boolean;

	// react-hook-form controller
	name?: string;
	value?: any;
	onChange?: ChangeHandler;
	onBlur?: ChangeHandler;
	ref?: RefCallBack;
}

export const BaseInput: React.FC<BaseInputProps> = props => {
	const [inputValue, setInputValue] = props.valueState || useState(props.defaultValue || '');

	const handleChangeValue = (new_value: any) => {
		let newInputValue = new_value;
		if (props.preChange) newInputValue = props.preChange(new_value);

		setInputValue(newInputValue);

		if (props.onChange) props.onChange({ target: { name: props.name, value: newInputValue } });
	};

	let rhfError: string | undefined;
	try {
		const {
			formState: { errors }
		} = useFormContext();
		rhfError = props.name && errors && (errors as any)[props.name]?.message;
	} catch {
		rhfError = undefined;
	}

	const inputError = rhfError || props.error;

	useEffect(() => {
		if (props.value !== undefined && props.value !== inputValue) {
			setInputValue(props.value);
		}
	}, [props.value]);

	useEffect(() => {
		if (props.defaultValue !== undefined && inputValue !== props.defaultValue)
			handleChangeValue(props.defaultValue);
	}, [props.defaultValue]);

	useEffect(() => {
		if (props.preChange) handleChangeValue(inputValue);
	}, [props.preChange]);

	useEffect(() => {
		let newInputValue = inputValue;
		if (props.preChange || (newInputValue && newInputValue !== inputValue)) handleChangeValue(newInputValue);
	}, []);

	const childProps = useMemo(
		() => ({
			value: inputValue,
			setValue: handleChangeValue,
			error: inputError || ''
		}),
		[inputValue, inputError]
	);

	return (
		<Container $interfaceOptions={props.interfaceOptions || {}}>
			{props.label && (
				<Label $disabled={props.disabled}>
					{props.label} {props.required && <LabelRequired>*</LabelRequired>}
				</Label>
			)}

			<div>{props.children?.(childProps)}</div>

			{inputError && !props.hideError && <ErrorMessage>{inputError}</ErrorMessage>}
		</Container>
	);
};
