import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Jobs from '../components/Jobs';
import Footer from '../components/Footer'
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
export default () => {
	return (
		<Layout>
			<Hero />

			<Services />
			<Footer />

		</Layout>
	);
};
// ...GatsbyImageSharpFluid
