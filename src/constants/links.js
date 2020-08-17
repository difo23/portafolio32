import React from 'react';
import { Link } from 'gatsby';
const data = [

	{
		id: 2,
		text: 'The 100 days of code',
		url: 'https://difo23the100daysofcode.netlify.app/'
	},
	{
		id: 3,
		text: 'YouTube Channel',
		url: 'https://www.youtube.com/channel/UCrzMBt76TptdoXUhNY_olog/videos'
	},
	{
		id: 3,
		text: 'Resume',
		url: 'https://lizandrocv.herokuapp.com/'
	}
	,
	{
		id: 4,
		text: 'Blogs',
		url: 'https://developerdecision.blogspot.com/'
	}
];


const tempLinks = data.map((link) => {
	return (
		<li key={link.id}>
			<a href={link.url}>{link.text}</a>
		</li>
	);
});
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
	return <ul className={`page-links ${styleClass ? styleClass : ''}`}>{tempLinks}</ul>;
};
