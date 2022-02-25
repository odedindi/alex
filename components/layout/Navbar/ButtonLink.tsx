import * as React from 'react';

import type { ButtonSize, ColorState } from 'types';

import Button from 'components/Button';
import Link from 'components/Link';

type ButtonProps = {
	colorState: ColorState;
	href: string;
	size?: ButtonSize;
	uppercase?: boolean;
};
export const ButtonLink: React.FC<ButtonProps> = ({
	children,
	colorState,
	href,
	size = 'medium',
	uppercase = false,
}) => (
	<Button colorState={colorState} uppercase={uppercase}>
		<Link href={href} size={size} navbarLink>
			{children}
		</Link>
	</Button>
);

export default ButtonLink;
