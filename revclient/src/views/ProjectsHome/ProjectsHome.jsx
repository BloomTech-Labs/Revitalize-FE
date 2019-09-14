import React from 'react';
import FeaturedProjects from './FeaturedProjects.jsx';
import TopSection from './TopSection.jsx';
import FeaturedTrades from './FeaturedTrades.jsx';
import CurriculumOptions from './CurriculumOptions.jsx';
import StudentCTA from "./StudentCTA/StudentCTA"
import TrendingTrades from "./TrendinTrades/TrendingTrades"


const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<TopSection />
			<FeaturedTrades />
			<CurriculumOptions />
			<FeaturedProjects />
			<StudentCTA />
			<TrendingTrades />
		</div>
	);
};

export default ProjectsHome;
