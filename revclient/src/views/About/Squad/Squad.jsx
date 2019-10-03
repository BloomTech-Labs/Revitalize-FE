import React from 'react';

//images
import kerry from '../../../assets/AboutPage/Kerry.svg';
import clark from '../../../assets/AboutPage/Clark.svg';
import frank from '../../../assets/AboutPage/Frank.svg';
import jose from '../../../assets/AboutPage/Jose.svg';
import omar from '../../../assets/AboutPage/Omar.svg';
import ruth from '../../../assets/AboutPage/Ruth.svg';
import skyelar from '../../../assets/AboutPage/Skyelar.svg';
import anthony from '../../../assets/AboutPage/anthony.svg';

const Squad = () => {
	const squad1 = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			// image: `${anthony}`,
			background: '#ffb588',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			// image: `${ruth}`,
			background: '#49a2ff',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Omar Salah',
			role: 'Full Stack Developer',
			// image: `${omar}`,
			background: '#d2405b',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Frank Martinez',
			role: 'Full Stack Developer',
			// image: `${frank}`,
			background: '#007ea7',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},
	];
	const squad2 = [
		{
			name: 'Kerry McPhearson',
			role: 'Product Design Evangelist',
			// image: `${kerry}`,
			background: '#4840ba',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},

		{
			name: 'Jose Montero Jr',
			role: 'Full Stack Developer',
			// image: `${jose}`,
			background: '#235597',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},

		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			// image: `${skyelar}`,
			background: '#4840ba',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},
	];
	const squad3 = [
		{
			name: 'Alexander Piroumian',
			role: 'Full Stack Developer',
			// image: 'https://res.cloudinary.com/revitalize/image/upload/v1570036577/about%20page/Alex_uqo9oo.svg',
			background: '#f78539',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},

		{
			name: 'Elan Riznis',
			role: 'Full Stack Developer',
			// image: 'https://res.cloudinary.com/revitalize/image/upload/v1570036576/about%20page/Elan_w397tt.svg',
			background: '#d6ad2f',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},

		{
			name: 'Clark Williams',
			role: 'Full Stack Developer',
			// image: `${clark}`,
			background: '#0051be',
			bio: '',
			github: '',
			linkedIn: '',
			twitter: '',
		},
	];
	return (
		<div className="squad-container">
			<h1 className="title">Meet The Squad</h1>
			<h3 className="description">Meet the people that make all of the magic happen behind the scenes.</h3>
			<div className="flex-container">
				<div className="squad-flex-one">
					{squad1.map(person => (
						<div className="person" style={{ backgroundColor: `${person.background}` }}>
							<h2 className="name"> {person.name}</h2>
							<h3 className="role"> {person.role}</h3>
							<div className="img-container">
								<img src={person.image} alt="person" />
							</div>
							<div className="overlay">
								<div className="text">Hello World</div>
							</div>
						</div>
					))}
				</div>
				<div className="squad-flex-two">
					{squad2.map(person => (
						<div className="person" style={{ backgroundColor: `${person.background}` }}>
							<h2 className="name"> {person.name}</h2>
							<h3 className="role"> {person.role}</h3>
							<div className="img-container">
								<img src={person.image} alt="person" />
							</div>
						</div>
					))}
				</div>

				<div className="squad-flex-three">
					{squad3.map(person => (
						<div className="person" style={{ backgroundColor: `${person.background}` }}>
							<h2 className="name"> {person.name}</h2>
							<h3 className="role"> {person.role}</h3>
							<div className="img-container">
								<img src={person.image} alt="person" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Squad;
