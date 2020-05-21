import React from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Top from './Top/Top';
import Spotlight from './Spotlight/Spotlight';
import RecommendedProjects from './RecommendedProjects/RecommendedProjects';
import NearYou from './NearYou/NearYou';
import CreateProject from './CreateProject/CreateProject';
import Noteworthy from './Noteworthy/Noteworthy';
import Hours from './Hire/Hire';

const Start = () => {

	return (
		<>
			<Nav />
			<div className="browse-container">
				<Top />
				<Spotlight />
				<RecommendedProjects />
				<CreateProject />
				<NearYou />
				<Hours />
				<Noteworthy />
			</div>
			<Footer />
		</>
	);
};

export default Start;
