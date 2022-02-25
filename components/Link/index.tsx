import React from 'react';

import * as S from './styles';
import { ButtonSize } from 'types';

type LinkProps = {
	href: string;
	footerLink?: boolean;
	navbarLink?: boolean;
	size?: ButtonSize;
};

const Link: React.FC<LinkProps> = ({
	children,
	footerLink,
	href,
	navbarLink,
	size,
}) => (
	<S.Link
		passHref
		href={href}
		footerLink={footerLink}
		navbarLink={navbarLink}
		size={size}
	>
		<a>{children}</a>
	</S.Link>
);

export default Link;
