import styled from 'styled-components';

import * as v from 'styles/variables';

export const HeaderContent = styled.div`
	position: relative;
`;

export const Nav = styled.nav`
	width: 100%;
	margin-top: ${v.distance800};
	min-height: 50px;
	color: ${v.colors.white};
`;

export const NavMenuContainer = styled.div`
	display: flex;
	max-width: ${v.maxContainerWidth};
	padding: 0 ${v.distance700};
	margin: 0 auto;
`;

export const NavMenu = styled.div`
	max-width: ${v.maxContainerWidth};
	display: flex;
	justify-content: space-between;
	width: 100%;
	z-index: 1;
	flex-flow: row wrap;
`;

export const NavMenuItem = styled.div`
	a {
		color: ${v.colors.white};
		text-decoration: none;
	}
`;

export const NavMenuLinksWrapper = styled.div`
	display: flex;
	margin: 0;
	padding: 0;
`;

export const NavMenuLinkWrapper = styled.li`
	color: ${v.colors.white};
	list-style: none;
	font-size: ${v.text600};
	padding: 0 ${v.distance800};
	line-height: 50px;
	transition: color 0.1s ease;

	min-width: 15rem;

	.NavMenuLink {
		font-size: ${v.text600};

		a {
			padding: ${v.distance500} ${v.distance700};
			display: flex;
		}
	}
`;

export const Text = styled.span`
	color: ${v.colors.white};
	flex-shrink: 0;
`;

export const ArrowWrapper = styled.div`
	stroke: ${v.colors.white};
	transition: transform 0.5s ease;
	margin-left: ${v.distance400};
	transform: translateX(0);

	&:hover .arrow {
		transform: translateX(5px);
	}
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	transform: skewY(-9deg);
	transform-origin: 0;
	box-shadow: 0 7px 30px 3px ${v.colors.deepPurple.shadow};

	&.purple {
		background: linear-gradient(
			150deg,
			${v.colors.deepPurple[700]} 20%,
			${v.colors.deepPurple[300]} 65%,
			${v.colors.deepPurple[100]} 94%
		);
	}

	&.blue {
		background: linear-gradient(
			150deg,
			${v.colors.lightBlue[800]} 20%,
			${v.colors.lightBlue[300]} 65%,
			${v.colors.lightBlue[100]} 94%
		);
	}

	&.green {
		background: linear-gradient(
			150deg,
			${v.colors.green[800]} 20%,
			${v.colors.green[300]} 65%,
			${v.colors.green[100]} 94%
		);
	}
`;
