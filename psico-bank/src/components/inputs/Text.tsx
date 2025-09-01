import { theme } from '@/theme';
import { forwardRef, useState } from 'react';

import { applyMask } from '@/utils';

import { BaseInput, BaseInputChildProps, BaseInputProps } from './Base';
import { InputBox, InputWrapper } from './styles';

type TextInputProps = BaseInputProps & {
	placeholder?: string;
	interfaceOptions?: Record<string, any>;
	icon?: React.FC<{ style?: React.CSSProperties }>;
	type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
	readOnly?: boolean;
	onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
	onClickButton?: () => Promise<void>;
	mask?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
	const [isLoadingButton, setIsLoadingButton] = useState(false);

	const handleOnClickButton = async () => {
		if (isLoadingButton) return;
		setIsLoadingButton(true);
		await props.onClickButton?.();
		setIsLoadingButton(false);
	};

	const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = event => {
		if (event.key === 'Enter' && props.onClickButton) {
			event.preventDefault();
			handleOnClickButton();
		}
	};

	return (
		<BaseInput {...props}>
			{(baseInputProps: BaseInputChildProps) => (
				<InputWrapper>
					{props.icon && (
						<props.icon
							style={{
								position: 'absolute',
								left: '0.5rem',
								top: '50%',
								transform: 'translateY(-50%)',
								color: theme.colors.neutral[60]
							}}
						/>
					)}

					<InputBox
						type={props.type || 'text'}
						placeholder={props.placeholder}
						value={props.mask ? applyMask(baseInputProps.value ?? '', props.mask) : baseInputProps.value}
						onChange={event => {
							const rawValue = event.target.value;

							if (props.mask) {
								const digits = rawValue.replace(/\D/g, '');
								baseInputProps.setValue(digits);
							} else {
								baseInputProps.setValue(rawValue);
							}
						}}
						onPaste={props.onPaste}
						onKeyDown={handleOnKeyDown}
						required={props.required}
						disabled={props.disabled}
						ref={ref}
						readOnly={props.readOnly}
						$hasError={baseInputProps.error.length > 0}
						$hasIcon={!!props.icon}
					/>
				</InputWrapper>
			)}
		</BaseInput>
	);
});
