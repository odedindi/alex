import * as React from 'react';
import type { ColorState } from 'types';
import { Footer } from './Footer';

import * as S from './styles';

type LayoutProps = {
	colorState?: ColorState;
};

export const Layout: React.FC<LayoutProps> = ({
	children,
	colorState = 'purple',
}) => (
	<S.LayoutWrapper>
		{children} <Footer colorState={colorState} />
	</S.LayoutWrapper>
);

export default Layout;
