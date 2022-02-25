import styled, { css, keyframes } from 'styled-components';
import * as v from 'styles/variables';
import { ButtonSize, ColorState } from 'types';

const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
  
    50% {
      background-position: 100% 50%;
    }
  
    100% {
      background-position: 0% 50%;
    }`;

export const Button = styled.button<{
	color: ColorState;
	disabled: boolean;
	isLoading: boolean;
	size: ButtonSize;
	uppercase?: boolean;
}>`
	transition: 0.5s;
	border-radius: ${v.borderRadius500};
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	color: ${v.colors.white};
	width: 100%;
	line-height: ${v.text800};
	box-shadow: 0 2px 15px 1px ${v.colors.grey.shadow};

	${({ isLoading }) =>
		isLoading &&
		css`
			animation: ${gradient} 1s ease-in-out infinite;
			background-position: right center;
			opacity: 0.8;
		`}
	background: ${({ color }) =>
		color === 'blue'
			? v.colors.lightBlue.gradient
			: color === 'green'
			? v.colors.green.gradient
			: v.colors.deepPurple.gradient};
	padding: ${({ size }) =>
		size === 'small'
			? `${v.distance500} ${v.distance400}`
			: `${v.distance600} ${v.distance500}`};
	font-size: ${({ size }) => (size === 'small' ? v.text400 : v.text500)};

	${({ uppercase }) =>
		uppercase &&
		css`
			text-transform: uppercase;
			width: 180px;
		`}
`;
