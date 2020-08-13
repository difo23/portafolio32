import React from "react"
// import "../css/main.css"
import { Helmet } from "react-helmet";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"


const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Lizandro's portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout
