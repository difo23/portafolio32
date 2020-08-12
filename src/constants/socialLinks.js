import React from 'react';
import { FaGithubSquare, FaLinkedin, FaDribbbleSquare, FaBehanceSquare, FaTwitterSquare } from 'react-icons/fa';

const data = [
	{
		id: 1,
		icon: <FaLinkedin className="social-icon" />,
		url: 'https://www.linkedin.com/in/lizandro23difo'
	},
	{
		id: 2,
		icon: <FaGithubSquare className="social-icon" />,
		url: 'https://github.com/difo23'
	},

	{
		id: 3,
		icon: <FaTwitterSquare className="social-icon" />,
		url: 'https://twitter.com/lizandro23difo'
	}
];
const links = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url} className="social-link">
				{link.icon}
			</a>
		</li>
	);
});

export default ({ styleClass }) => {
	return <ul className={`social-links ${styleClass ? styleClass : ''}`}>{links}</ul>;
};
