import React, { forwardRef, useMemo, useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { Ripples } from 'react-ripples-continued';

import { ButtonComponent } from './styles';

interface ButtonProps {
	label: string;
	theme?: 'primary' | 'secondary' | 'tertiary';
	icon?: React.FC<{ className?: string }>;
	type?: 'button' | 'submit';
	loading?: boolean;
	disableLoading?: boolean;
	disableRipple?: boolean;
}

export type ButtonPropsWithChildren = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & ButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonPropsWithChildren>((props, ref) => {
	const {
		theme: variant = 'primary',
		onClick,
		disabled,
		loading,
		disableLoading,
		disableRipple,
		icon,
		label,
		type = 'button',
		...rest
	} = props;

	const [isLoading, setIsLoading] = useState(false);
	const isLoadingState = useMemo(
		() => (isLoading && !disableLoading) || loading || false,
		[isLoading, loading, disableLoading]
	);

	const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
		if (disabled || isLoadingState) return;
		if (!disableLoading) setIsLoading(true);
		await onClick?.(event);
		if (!disableLoading) setIsLoading(false);
	};

	const Icon = icon;

	return (
		<ButtonComponent
			{...rest}
			$variant={variant}
			type={type}
			ref={ref}
			onClick={handleClick}
			disabled={disabled || isLoadingState}>
			{isLoadingState ? (
				<AiOutlineLoading className="spin" />
			) : (
				<>
					{Icon && <Icon />} {label}
				</>
			)}

			{!disableRipple && <Ripples duration={700} color="#080808" blur={0.2} opacity={0.3} fillAndHold optimize />}
		</ButtonComponent>
	);
});
