import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Video from './Video';
import SocialLinks from '../constants/socialLinks';
const query = graphql`
	{
		file(relativePath: { eq: "hero-img.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
const Hero = () => {
	const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);

	return (
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline" />
						<h1>  Ing. Lizandro J. Ramírez</h1>
						<h4>Software engineer</h4>
						<a href="https://www.linkedin.com/in/lizandro23difo" className="btn">
							Contact me
						</a>
						<SocialLinks />
					</div>

				</article>
				<br></br>

				<Video
					videoSrcURL="https://www.youtube.com/embed/1wuL2cO89i0"
					videoTitle="Official DigData Learn on YouTube"

				/>
			</div>

		</header>
	);
};

export default Hero;
