import * as React from 'react';

import * as S from './styles';

import type { ColorState } from 'types';

type BackgroundProps = {
	colorState?: ColorState;
};

export const Background: React.FC<BackgroundProps> = ({
	colorState = 'purple',
}) => <S.Background className={colorState} />;

export default Background;
