/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next';

import * as S from 'styles/Home';

import Layout from 'components/layout';
import ContentWrapper from 'components/layout/ContentWrapper';
import Navbar from 'components/layout/Navbar';
import ButtonLink from 'components/layout/Navbar/ButtonLink';

const Home: NextPage = () => (
	<Layout>
		<Navbar colorState="blue">
			<S.PageContainer>
				<S.HeroContainer>
					<div className="intro">
						<h1 className="title">Alex Plubming Solutions</h1>

						<p className="description">
							Your togo guy for any home or business plumbing and issues,
							resulted from years of hard work on a number of awesome products.
						</p>

						<ButtonLink colorState="green" size="small" href="#" uppercase>
							More
						</ButtonLink>
					</div>

					<div className="logo">
						{/* <Rocket /> */}
						an image or a logo?
					</div>
				</S.HeroContainer>
			</S.PageContainer>
		</Navbar>
		<ContentWrapper>
			<S.ContentContainer>
				<h2>THE GUY HAS THE COMPLETE SET OF TOOLS FOR ANY TASK</h2>
				<p>
					"One of the problems of every civilization in which the population has
					been centralized in cities and towns has been the development of
					adequate plumbing systems. In certain parts of Europe the complex
					aqueducts built by the Romans to supply their cities with potable
					water can still be seen. However, the early systems built for the
					disposal of human wastes were less elaborate. Human wastes were often
					transported from the cities in carts or buckets or else discharged
					into an open, water-filled system of ditches that led from the city to
					a lake or stream."
				</p>
				<blockquote>
					Plumbing follows the basic laws of nature — gravity, pressure and
					water seeking its own level. Knowing this, you can understand its
					"mysteries" and make dozens of fixes to your home's plumbing system.
					You can save yourself time, trouble and money! The plumbing system in
					your home is composed of two separate subsystems. One subsystem brings
					freshwater in, and the other takes wastewater out. The water that
					comes into your home is under pressure. It enters your home under
					enough pressure to allow it to travel upstairs, around corners or
					wherever else it's needed. As water comes into your home, it passes
					through a meter that registers the amount you use.
				</blockquote>
				<p>
					The main water shut-off, or stop, valve is typically located close to
					the meter. In a plumbing emergency, it's vital that you quickly close
					the main shutoff valve. Otherwise, when a pipe bursts, it can flood
					your house in no time. If the emergency, like a leak, is confined to a
					sink, shower, or toilet, however, you may not want to turn off your
					entire water supply. Therefore, most fixtures should have individual
					stop valves.
				</p>
			</S.ContentContainer>
			<S.IconsContainer>
				<div>images?</div>
				<div>images?</div>
				<div>images?</div>
			</S.IconsContainer>
		</ContentWrapper>
	</Layout>
);

export default Home;
