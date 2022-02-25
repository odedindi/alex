import * as React from 'react';

import * as S from './styles';

import type { ColorState } from 'types';

import Arrow from 'components/ArrowIcon';
import ButtonLink from './ButtonLink';

type NavbarProps = {
	colorState?: ColorState;
};

export const Navbar: React.FC<NavbarProps> = ({ colorState = 'purple' }) => (
	<S.Nav>
		<S.NavMenuContainer>
			<S.NavMenu>
				<S.NavMenuLinksWrapper>
					<S.NavMenuLinkWrapper>
						{/* <S.NavMenuItem> */}
						<ButtonLink href="#" colorState={colorState}>
							<S.Text>About</S.Text>
							<S.ArrowWrapper>
								<Arrow />
							</S.ArrowWrapper>
						</ButtonLink>
					</S.NavMenuLinkWrapper>
					<S.NavMenuLinkWrapper>
						{/* </S.NavMenuItem> */}
						{/* <S.NavMenuItem> */}
						<ButtonLink href="#" colorState={colorState}>
							<S.Text>More</S.Text>
							<S.ArrowWrapper>
								<Arrow />
							</S.ArrowWrapper>
						</ButtonLink>
						{/* </S.NavMenuItem> */}
					</S.NavMenuLinkWrapper>
				</S.NavMenuLinksWrapper>
			</S.NavMenu>
		</S.NavMenuContainer>
	</S.Nav>
);

export default Navbar;
