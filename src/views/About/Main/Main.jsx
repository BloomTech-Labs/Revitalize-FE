import React from 'react';

const Main = () => {
	return (
		<div className="main-container">
			<h1 className="title">Crowdfunding for community projects you care about</h1>
			<div className="main-content">
				<div className="main-left">
					<img
						src="https://res.cloudinary.com/revitalize/image/upload/v1570036130/about%20page/Circle_2019_sc3ml9.svg"
						alt="background circles and year"
					/>
				</div>
				<div className="main-right">
					<p>
						Modern and efficient infrastructure is foundational to ensuring communities have economic
						opportunities well into the future. And yet, across the United States, one can find communities
						with more infrastructure projects that need to be undertaken than their local community has
						funds and resources.
					</p>
					<p>
						Enter ReVitalize, a crowdsourcing & crowdfunding platform dedicated to serving stakeholders
						interested in rejuvenating their community as well as trade professionals & apprentices who are
						ready, willing, and able.
					</p>
					<p>
						ReVitalize allows users to participate in community projects in a number of ways, whether they
						want to create a project and raise funds, donate, organize available resources, or volunteer
						based on their availability and desired skillset.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
