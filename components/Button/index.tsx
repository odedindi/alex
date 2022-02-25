import * as React from 'react';

import * as S from './styles';

import type { ButtonSize, ButtonType, ColorState } from 'types';

type ButtonProps = {
	isLoading?: boolean;
	type?: ButtonType;
	colorState: ColorState;
	size?: ButtonSize;
	uppercase?: boolean;
};
export const Button: React.FC<ButtonProps> = ({
	children,
	colorState = 'purple',
	isLoading = false,
	size = 'medium',
	type = 'button',
	uppercase = false,
}) => (
	<S.Button
		disabled={isLoading}
		color={colorState}
		loading={isLoading}
		size={size}
		type={type}
		uppercase={uppercase}
	>
		{children}
	</S.Button>
);

export default Button;
