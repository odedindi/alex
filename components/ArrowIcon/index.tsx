import * as S from './styles';

export const Arrow = () => (
	<S.Icon
		// width="13"
		// height="10"
		viewBox="0 0 13 10"
		// style={{ stroke: 'white' }}
	>
		<S.ArrowPath d="M1,5H12" />
		<S.ArrowPath d="M7.72,1.006L11.992,5,7.72,8.993" />
	</S.Icon>
);

export default Arrow;
