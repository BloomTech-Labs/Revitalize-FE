import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withRouter } from 'react-router-dom';

//Image Imports (To be deleted once we have a back end)
import pic1 from '../../assets/SingleProjectPage/pic1.jpeg';
import pic2 from '../../assets/SingleProjectPage/pic2.jpeg';
import pic3 from '../../assets/SingleProjectPage/pic3.jpeg';
import commentProfile1 from '../../assets/SingleProjectPage/commentProfile1.png';
import commentProfile2 from '../../assets/SingleProjectPage/commentProfile2.png';
// import userProfile from '../../assets/SingleProjectPage/userProfile.png'
import fb from '../../assets/AuthPages/fb-logo.png';
import twtr from '../../assets/AuthPages/twitter.png';

//Component Imports
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Donate from './ProjectDescription/Donate/Donate';
import DetailedDescription from './ProjectDescription/DetailedDescription/DetailedDescription';
import ProjectPictures from './ProjectDescription/ProjectPictures/ProjectPictures';
import ProjectComments from './ProjectDescription/ProjectComments/ProjectComments';
import BasicDescription from './ProjectDescription/DetailedDescription/BasicDescription/BasicDescription';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT } from '../../graphql/queries';

import { useWindowHook } from '../../components/Layout/windowOnClickHook.js';

const project = {
	projectOrganizer: 'Julian Crenshaw',
	projStartDate: 'January 13, 2020',
	duration: '9 months',
	difficultyLevel: 'Medium',
	projectBudget: '500000',
	raised: '400000',
	location: 'Detroit, MI',
	projectPhotos: [pic1, pic2, pic3],
	comments: [
		{
			profilePic: commentProfile1,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
		{
			profilePic: commentProfile2,
			comment: 'I love what Team Rubicon is doing to promote community and growth!',
			createdAt: '',
			likes: ['name1', 'name2', 'name3', 'name1', 'name2', 'name3'],
		},
	],
	projectDescription: 'Project description goes here.',
};

const ProjectPage = ({ match }) => {
	const [copied, setCopied] = useState(false);

	const [modalVal, setModalVal, carouselVal, setCarouselVal] = useWindowHook();

	const val = e => {
		if (e.target.className === 'modal') {
			setModalVal(false);
		}
	};

	const carVal = e => {
		if (e.target.className === 'carousel-large-project') {
			setCarouselVal(false);
		} else if (e.target.className === 'car-pic') {
			setCarouselVal(true);
		}
	};

	const { loading, error, data } = useQuery(GET_PROJECT, {
		variables: { id: match.params.id },
	});
	const [projectData, setProjectData] = useState(data);

	console.log('project', projectData);

	useEffect(() => {
		setProjectData(data);
	}, [data]);

	// window.onclick = function(e) {
	// 	if (e.target.className === 'modal') {
	// 		return setModal(false);
	// 	} else if (e.target.className === 'carousel-large-project') {
	// 		return setLarge(false);
	// 	}
	// };

	if (error) return <h2>ERROR! Someone call Elan</h2>;

	if (loading || !projectData) return <h3>Summoning magic!</h3>;
	return (
		<>
			<Nav />
			<div className="project-page-container">
				<div onClick={val} className={!modalVal ? 'none' : 'modal'}>
					<div className="inner-modal">
						<div className="button-div">
							<div className="outer" onClick={() => setModalVal(false)}>
								<div className="inner" onClick={() => setModalVal(false)}>
									<label onClick={() => setModalVal(false)}>Back</label>
								</div>
							</div>
						</div>
						<h2>Share with Family, Friends, Communities, & More</h2>
						<h4>Fundraise on social networks, email, and more!</h4>
						<div className="lines"></div>
						<div className="logos">
							<div>
								<img src={fb} alt="Facebook Logo" />
								<p>Facebook</p>
							</div>
							<div>
								<img src={twtr} alt="Twitter Logo" />
								<p>Twitter</p>
							</div>
							<div>
								<img alt="LinkedIn Logo" />
								<p>LinkedIn</p>
							</div>
							<div>
								<img alt="Email Logo" />
								<p>Email</p>
							</div>
							<div>
								<img alt="Slack Logo" />
								<p>Slack</p>
							</div>
						</div>
						<div className="lines"></div>
						<form>
							<p>Copy Link</p>
							<div>
								<CopyToClipboard text={window.location.href}>
									<input
										name="link"
										defaultValue={window.location.href}
										onClick={e => {
											e.preventDefault();
											setCopied(true);
										}}
									/>
								</CopyToClipboard>
								<CopyToClipboard text={window.location.href}>
									{copied ? (
										<button disabled={true} className="copied">
											Copied!
										</button>
									) : (
										<button
											onClick={e => {
												e.preventDefault();
												setCopied(true);
											}}
										>
											Copy
										</button>
									)}
								</CopyToClipboard>
							</div>
						</form>
					</div>
				</div>
				<div className="singleProjectVectorContainer">
					<div className="singleProjectVector">
						<div className="blueSquare">
							<h1>{projectData.project.name}</h1>
							<div className="blueVector"></div>
						</div>
					</div>
				</div>

				<div className="project-page-flex">
					<BasicDescription
						startDate={projectData.project.startDate}
						duration={projectData.project.duration}
						difficulty={projectData.project.difficulty}
						organizer={`${projectData.project.profile.firstName} ${projectData.project.profile.lastName}`}
					/>
					<Donate
						raised={projectData.project.amountFunded}
						budget={projectData.project.goalAmount}
						projectData={projectData}
						setModal={setModalVal}
					/>
				</div>
				<DetailedDescription
					startDate={project.projStartDate}
					duration={project.duration}
					difficulty={project.difficultyLevel}
					organizer={`${projectData.project.profile.firstName} ${projectData.project.profile.lastName}`}
					location={`${projectData.project.city}, ${projectData.project.state}`}
					projDescription={projectData.project.description}
					projectCreator={projectData.project.profile}
				/>
				<ProjectPictures projectPhotos={projectData.project.images} carouselVal={carouselVal} carVal={carVal} />
				<ProjectComments
					comments={projectData.project.comments}
					projectData={projectData}
					setProjectData={setProjectData}
					id={projectData.project.id}
					userId={projectData.project.profile.id}
				/>
			</div>
			<Footer />
		</>
	);
};

export default withRouter(ProjectPage);
