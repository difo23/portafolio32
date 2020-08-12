import React from 'react';
import logo from '../assets/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import PageLinks from '../constants/links';
const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} width="156.641" height="35.3516" alt="logo" />
					<button type="button" className="toggle-btn">
						<FaAlignRight />
					</button>
				</div>

				<PageLinks styleClass="nav-links" />
			</div>
		</nav>
	);
};

export default Navbar;
