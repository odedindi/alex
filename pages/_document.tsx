import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import styled, { ServerStyleSheet } from 'styled-components';

import { ServerStyles, createStylesServer } from '@mantine/next';

const stylesServer = createStylesServer();

import getConfig from 'next/config';

const {
	publicRuntimeConfig: { gaTrackingId },
} = getConfig();

export default class MyDocument extends Document {
	setGoogleTags = () => ({
		__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaTrackingId}');
          `,
	});

	static getInitialProps = async (
		ctx: DocumentContext,
	): Promise<DocumentInitialProps> => {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
						<ServerStyles html={initialProps.html} server={stylesServer} />
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	};
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<noscript>
						<Iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBL8783" />
					</noscript>
					<Main />
					<NextScript />
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
					/>
					<script dangerouslySetInnerHTML={this.setGoogleTags()} />
				</body>
			</Html>
		);
	}
}

const Iframe = styled.iframe`
	height: 0;
	width: 0;
	display: none;
	visibility: hidden;
`;
