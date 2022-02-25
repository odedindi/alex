import * as React from 'react';

import * as S from './styles';

import Link from 'components/Link';

type FooterProps = {
	colorState: 'purple' | 'green' | 'blue';
};
export const Footer: React.FC<FooterProps> = ({ colorState }) => {
	const currentYear = new Date().getFullYear();
	return (
		<S.FooterWrapper className={colorState}>
			<S.Footer>
				<div>
					<Link href="/privacy-policy" footerLink>
						ODEDINDI
					</Link>
					©{currentYear}, All rights reserved
				</div>

				<div>
					<Link href="/privacy-policy" footerLink>
						Privacy
					</Link>

					<Link href="/terms" footerLink>
						Terms
					</Link>
				</div>
			</S.Footer>
		</S.FooterWrapper>
	);
};
