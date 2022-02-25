import { ColorState } from 'types';
import Background from './Background';
import Navbar from './Navbar';
import * as S from './styles';

type HeaderContentProps = {
	colorState?: ColorState;
};

export const HeaderContent: React.FC<HeaderContentProps> = ({
	children,
	colorState = 'purple',
}) => (
	<S.HeaderContent>
		<Background colorState={colorState} />
		<Navbar colorState={colorState} />
		{children}
	</S.HeaderContent>
);

export default HeaderContent;
