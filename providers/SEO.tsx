import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

const defaultSEO = {
	title: 'Alex plumbing solutions and services',
	description: 'Alex plumbing solutions and services',
};

type SEOProps = {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
};

const extendSEO = (options: SEOProps) => ({ ...defaultSEO, ...options });

export const SEOProvider: React.FC<SEOProps> = (props) => (
	<>
		<DefaultSeo {...extendSEO(props)} />
		<Head>
			<title>Alex plumbing solutions and services</title>
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#fff" />
			<meta name="viewport" content="initial-scale=1, width=device-width" />
			<meta
				name="description"
				content="Alex plumbing solutions and services landing site"
			/>
			<meta
				name="description"
				content="Alex plumbing solutions and services landing site"
			/>
			<meta
				name="keywords"
				content="Alex plumbing solutions and services landing site אלכס פתרונות אינסטלציה Саша Сантехник"
			/>
			<meta
				name="application-name"
				content="Alex plumbing solutions and services landing site"
			/>
			<link data-react-helmet="true" rel="icon" href="/favicon.ico" />
		</Head>
	</>
);

export default SEOProvider;
