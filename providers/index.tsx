import SEOProvider from './SEO';
import StyleProvider from './styles';

export const Providers: React.FC = ({ children }) => (
	<>
		<SEOProvider />
		<StyleProvider>{children}</StyleProvider>
	</>
);

export default Providers;
