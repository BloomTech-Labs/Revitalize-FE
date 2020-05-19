import React from 'react';

import Accordion from './Accordion';
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

function FAQ() {
	return (
		<>
			<Nav />
			<div className="accordion__div">
				<h2>Frequently Asked Questions</h2>
				<Accordion
					title="What is ReVitalize?"
					content="<p>A modern approach to building your community, ReVitalize is a crowdfunding platform that creates apprenticeship opportunities to develop your skills to gain licensing.</p>"
				/>
				<Accordion
					title="How do I get involved?"
					content="<p>First you are going to want to register with ReVitalize. 
					Once you've registered you have two options, one is to browse projects and find one you want to join. 
					Once you have been accepted to a project you are now an Apprentice. The other option is to start your own project, which will make you a Project Manager.</p>"
				/>
				<Accordion
					title="Can I use a custom domain?"
					content="
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
   </br>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
				/>
			</div>
			<Footer />
		</>
	);
}

export default FAQ;
