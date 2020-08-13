import React from 'react';
import { FaCode, FaStackOverflow, FaNetworkWired } from 'react-icons/fa';
export default [
	{
		id: 1,
		icon: <FaCode className="service-icon" />,
		title: 'Software Engineer',
		text: `I have master degree in software for distributed and embedded system. I like to work with  internet of things like microcontrollers, FPGA and VHDL. During my master I was worked with Apache distributed systems like Hadoop, Zookeeper, Storm and spark.`
	},
	{
		id: 2,
		icon: <FaStackOverflow className="service-icon" />,
		title: 'FullStack Web Development',
		text: `I'm current working with Mongodb,  Express, React and Nodejs (MERN) stack technologies in web. I am fanboy of vanilla JS. I don't have problem with to use others programming languages about the backend like are Python, Go and Java.`
	},
	{
		id: 3,
		icon: <FaNetworkWired className="service-icon" />,
		title: 'Networking Engineer',
		text: `I am telematics engineer, I have passion with electronics devices and the networks of telecommunications, this background let me know better how to work with the software in this embedded devices.`
	}
];
