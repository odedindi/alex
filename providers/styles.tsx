import * as React from 'react';
import { MantineProvider } from '@mantine/core';

export const StyleProvider: React.FC = ({ children }) => (
	<MantineProvider
		theme={{
			colorScheme: 'light',
			colors: {
				'deep-purple': [
					'#f3effb',
					'#ddd0f2',
					'#ddd0f280',
					'#bca1e6',
					'#a682de',
					'#9063d6',
					'#7a44cd',
					'#6631b9',
					'#55299a',
					'#4c258b',
				],
				'light-blue': [
					'#fafafa',
					'#f5f5f5',
					'#eee',
					'#e0e0e0',
					'#bdbdbd',
					'#9e9e9e',
					'#757575',
					'#616161',
					'#424242',
					'#212121',
				],
			},
			primaryColor: '#777',
			shadows: {
				'deep-purple': 'rgba(94, 96, 186, 0.35)',
				grey: 'rgba(33, 33, 33, 0.25)',
			},
			fontFamily: ['Open Sans', 'Helvetica Neue', 'sans-serif'],
			headings: {
				sizes: {
					h1: { fontSize: '40px' },
					h2: { fontSize: '35px' },
				},
				fontWeight: {
					h1: 'normal',
					h2: 'normal',
				},
			},
		}}
	>
		{children}
	</MantineProvider>
);

export default StyleProvider;
