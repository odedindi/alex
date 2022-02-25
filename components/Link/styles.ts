import styled, { css } from 'styled-components';
import NextLink from 'next/link';

import * as v from 'styles/variables';
import { ButtonSize } from 'types';

export const Link = styled(NextLink)<{
	footerLink?: boolean;
	navbarLink?: boolean;
	size?: ButtonSize;
}>`
	${({ footerLink }) =>
		footerLink &&
		css`
			font-weight: ${v.textHeight600};
			text-decoration: none;
			font-size: ${v.text500};
			margin-left: ${v.distance600};

			&:hover {
				text-decoration: underline;
			}
		`};
	${({ navbarLink }) =>
		navbarLink &&
		css`
			display: block;
			text-decoration: none;
			color: ${v.colors.white};
		`}
	padding: ${({ size }) =>
		!size
			? ''
			: size === 'small'
			? `${v.distance500} ${v.distance400}`
			: `${v.distance600} ${v.distance500}`};
	font-size: ${({ size }) =>
		!size ? '' : size === 'small' ? v.text400 : v.text500};
`;
