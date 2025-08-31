import { forwardRef, useState } from 'react';

import { BaseInput, BaseInputChildProps, BaseInputProps } from './Base';
import { InputBox } from './styles';

type TextInputProps = BaseInputProps & {
	placeholder?: string;
	type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
	required?: boolean;
	readOnly?: boolean;
	onPaste?: (event: React.ClipboardEvent<HTMLInputElement>) => void;
	onClickButton?: () => Promise<void>;
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
		<div>
			<BaseInput {...props}>
				{(baseInputProps: BaseInputChildProps) => (
					<div>
						<InputBox
							type={props.type || 'text'}
							placeholder={props.placeholder}
							value={baseInputProps.value}
							onChange={event => baseInputProps.setValue(event.target.value)}
							onPaste={props.onPaste}
							onKeyDown={handleOnKeyDown}
							required={props.required}
							disabled={props.disabled}
							ref={ref}
							readOnly={props.readOnly}
						/>
					</div>
				)}
			</BaseInput>
		</div>
	);
});
