import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"

import SEO from "../components/SEO"
export default ({ data }) => {


	return (
		<Layout>
			<SEO title="Home" description="this is our home page" />
			<Hero />
			<Services />


		</Layout>
	)
}
