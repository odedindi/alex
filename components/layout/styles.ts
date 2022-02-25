import styled from 'styled-components';
import * as v from 'styles/variables';

export const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	overflow: hidden;
	min-height: 100vh;
	justify-content: space-between;
`;

export const ContentWrapper = styled.div`
	width: 100%;
	max-width: ${v.maxContainerWidth};
	margin: ${v.distance900} auto;
	padding: 0 ${v.distance700};
	box-sizing: border-box;
	position: relative;
	min-height: 250px;
`;

export const FooterWrapper = styled.div`
	border-top: 1px solid ${v.colors.grey[300]};
	background: ${v.colors.grey[100]};
	padding: calc(var(${v.distance900}) * 2) 0;
	margin-top: ${v.distance900};

	&.purple {
		background: ${v.colors.deepPurple[10050]};
	}

	&.green {
		background: ${v.colors.green[10030]};
	}

	&.blue {
		background: ${v.colors.lightBlue[10030]};
	}
`;

export const Footer = styled.footer`
	margin: 0 auto;
	padding: 0 ${v.distance700};
	width: 100%;
	max-width: ${v.maxContainerWidth};
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	div {
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		min-width: 10rem;

		a {
			padding: 0 0.5rem;
		}
	}
`;
