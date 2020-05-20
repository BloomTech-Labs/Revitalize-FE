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
					content="<p>A modern approach to building your community, ReVitalize is a crowdfunding platform that creates apprenticeship 
					opportunities to develop your skills to gain licensing.</p>"
				/>
				<Accordion
					title="How do I get involved?"
					content="<p>First you are going to want to register with ReVitalize. 
					If you are somone looking to develop their trade by being mentored and gaining experience on a real-life project all you need to do is find a project that excites you and apply.
					If you or your business are interested in setting up community projects you can click on Create Project and fill out the form.
					If you are an individual who is interested in mentoring apprentices go ahead and find a project you are interested in and apply, 
					you will have a few more steps to take so that we can authenticate your licensing and know how many apprentices you are willing to take on.</P>"
				/>
				<Accordion
					title="What is an Apprentice?"
					content="
   <p>An Apprentice is somone looking to develop their trade through being mentored by a Trades Professional to gain skills and experience towards their licensing.</p>"
				/>
				<Accordion
					title="What is a Trades Professional?"
					content="
   <p>A Trades Professional is somone with a licensed specialization who is willing to donate time to mentor 1 or more Apprentices.</p>"
				/>
				<Accordion
					title="What is a Project Manager?"
					content="
   <p>A Project Manager is an individual or business with an interest in setting up community projects.</p>"
				/>
			</div>
			<Footer />
		</>
	);
}

export default FAQ;
