import styled from 'styled-components';

import * as v from './variables';

export const PageContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: ${v.distance900};
	min-height: 450px;

	.intro {
		padding: ${v.distance700} 0;
		min-width: 350px;
		flex: 1;
		max-width: 800px;

		.title {
			color: ${v.colors.white};
			font-size: ${v.text1100};
			font-weight: ${v.textWeight300};
			margin-top: 0;
		}

		.description {
			color: ${v.colors.grey[200]};
			font-size: ${v.text500};
			margin: ${v.distance800} 0;
		}
	}

	.logo {
		padding: ${v.distance700} ${v.distance600} ${v.distance700} 0;
		max-width: 400px;
		min-width: 300px;
		min-height: 250px;
		display: flex;
		justify-content: center;
		overflow: hidden;

		svg {
			height: 400px;
			width: 150px;
			transform: rotate(-10deg);
		}
	}
`;

export const HeroContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	flex: 1;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	max-width: ${v.maxContainerWidth};
	padding: 0 ${v.distance700} ${v.distance700};
	margin: 0 auto;
	min-height: 450px;
`;

export const ContentContainer = styled.div`
	padding-right: 400px;

	h2 {
		text-align: right;
		font-size: ${v.text800};
		max-width: 400px;
		margin-left: auto;
	}

	p {
		text-align: right;
		max-width: 550px;
		margin-left: auto;
	}
`;
export const IconsContainer = styled.div`
	position: absolute;
	top: -70px;
	right: -50px;

	div {
		white-space: nowrap;
		display: flex;

		&:nth-of-type(2) {
			padding-left: ${v.distance600};
		}

		&:last-of-type {
			padding-left: calc(var(${v.distance600}) * 2);
		}

		span {
			display: block;
			height: 70px;
			overflow: hidden;

			&:first-of-type {
				margin-top: calc(var(${v.distance600}) * 2);
			}

			&:nth-of-type(2) {
				margin-top: ${v.distance600};
			}
		}
	}

	svg {
		width: 100px;
		transform: rotateZ(27deg) rotateY(25deg) skewY(-5deg);
	}
`;
