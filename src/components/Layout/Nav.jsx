import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { FaMoon, FaCog, FaWindowClose } from 'react-icons/fa';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

import InitialAvatar from '../../helpers/InitialAvatar.js';
import { useWindowHook } from '../../helpers/windowOnClickHook.js';

const unauthenticatedLinks = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'About' },
	{ href: '/login', label: 'Log In' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const authenticatedLinks = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/dashboard', label: 'Dashboard' },
	{ href: '/createproject', label: 'Create Project' },
	{ href: '/settings', label: 'Settings' },
	{ href: '#', label: 'Logout' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = props => {
	const [activeHamburger, setActiveHamburger] = useState(false);
	const [darkModeActive, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')));
	let darkModeStatus = 'Dark Mode Off';

	if (darkModeActive === null) {
		setDarkMode(false);
	} else if (JSON.parse(localStorage.getItem('dark-mode')) === true) {
		document.querySelector('body').classList.add('dark-mode');
		darkModeStatus = 'Dark Mode On';
	} else {
		document.querySelector('body').classList.remove('dark-mode');
		darkModeStatus = 'Dark Mode Off';
	}

	//custom hook for window.onClick
	const [
		// modal, setModal, carousel, setCarousel,
		clicked,
		setClicked,
	] = useWindowHook();

	const toggleDarkMode = () => {
		setDarkMode(!darkModeActive);
		localStorage.setItem('dark-mode', !darkModeActive);
		if (JSON.parse(localStorage.getItem('dark-mode')) === true) {
			document.querySelector('body').classList.add('dark-mode');
		} else {
			document.querySelector('body').classList.remove('dark-mode');
		}
	};

	const setActive = e => {
		if (e.target.className !== 'dropdown') {
			setActiveHamburger(!activeHamburger);
			setClicked(!clicked);
		}
	};


	// Current user
	const { client, loading, error, data } = useQuery(GET_USER);

	const logout = () => {
		client.resetStore();
		localStorage.removeItem('token');
		props.history.push('/login');
	};

	if (localStorage.getItem('token')) {
		if (loading)
			return (
				<nav>
					<div className="leftNav">
						<Link to="/" title="Home">
							<div className="logo">
								<h1>Revitalize </h1>
							</div>
						</Link>
					</div>
				</nav>
			);
		if (error)
			return (
				<nav>
					<div className="leftNav">
						<Link to="/" title="Home">
							<div className="logo">
								<h1>Revitalize </h1>
							</div>
						</Link>
					</div>
				</nav>
			);
	}

	return (
		<nav>
			<div className="leftNav">
				<Link to="/" title="Home">
					<div className="logo">
						<h1>ReVitalize </h1>
					</div>
				</Link>
			</div>

			<div className="right-nav">
				<ul>
					{localStorage.getItem('token') ? (
						<>
							{authenticatedLinks.map(link =>
								link.label === 'Create Project' ? (
									<li>
										<Link to={link.href} key={link.key}>
											<button className="create-project-button">{link.label}</button>
										</Link>
									</li>
								) : link.label === 'Logout' ? (
									<li className="navLinks logout" onClick={logout} key={link.key}>
										<Link to={link.href}>{link.label}</Link>
									</li>
								) : link.label === 'Settings' ? null : (
									<li className="navLinks" key={link.key}>
										<Link to={link.href}>{link.label}</Link>
									</li>
								),
							)}
							<li>
								<div className="user" tabIndex="0" onClick={setActive}>

									{data.me.firstName !== null ? (
										<span className="user-personal-greeting">{`Welcome, ${data.me.firstName}`}</span>
									) : (
										<span className="user-personal-greeting">Welcome</span>
									)}

									{data.me.profileImage !== null ? (
										<img className="user-icon" src={data.me.profileImage} alt={data.me.firstName} />
									) : (
										<InitialAvatar
											height={60}
											width={60}

											firstName={data.me.firstName}
											lastName={data.me.lastName}
										/>
									)}

									<div className={`dropdown ${!clicked && 'display-none'}`} name="drop" tabIndex="0">
										<div className="arrow-up"></div>
										<Link to="/settings" className="dropdown-option">
											<FaCog className="icon" /> Settings
										</Link>
										<div onClick={toggleDarkMode} className="dropdown-option">
											<FaMoon className="icon" />
											Dark mode
										</div>
										<div onClick={logout} className="dropdown-option">
											<FaWindowClose className="icon" />
											Log out
										</div>
									</div>
								</div>
							</li>
						</>
					) : (
						<>
							{unauthenticatedLinks.map(({ key, href, label }) => (
								<li className="navLinks" key={key}>
									<Link to={href}>{label}</Link>
								</li>
							))}
							<li>
								<Link to="/register">
									<button className="register">Sign Up!</button>
								</Link>
							</li>
							<li>
								<div className="dark-mode-emoji">
									<FaMoon onClick={() => toggleDarkMode()} />
								</div>
							</li>
							{!localStorage.getItem('token') && (
								<li>
									<div
										onClick={setActive}
										className={`hamburger hamburger--squeeze ${activeHamburger && 'is-active'}`}
										type="button"
									>
										<span className="hamburger-box">
											<span className="hamburger-inner"></span>
										</span>
									</div>
								</li>
							)}
						</>
					)}
				</ul>
			</div>

			{activeHamburger && (
				<div className="overlay overlay-hugeinc">
					<div className="nav-overlay">
						<ul>
							{localStorage.getItem('token') ? (
								<>
									{authenticatedLinks.map(({ key, href, label }) =>
										label === 'Logout' ? (
											<li className="navLinks-overlay logout" onClick={logout} key={key}>
												<Link to={href}>{label}</Link>
											</li>
										) : (
											<li className="navLinks-overlay" key={key}>
												<Link to={href}>{label}</Link>
											</li>
										),
									)}
									<li>
										<div onClick={toggleDarkMode} className="dropdown-darkMode">
											{darkModeStatus}
										</div>
									</li>
								</>
							) : (
								<>
									{unauthenticatedLinks.map(({ key, href, label }) => (
										<li className="navLinks-overlay" key={key}>
											<div>
												<Link to={href}>{label}</Link>
											</div>
										</li>
									))}
									<li>
										<div>
											<Link to="/register">
												<button className="register">Get Started</button>
											</Link>
										</div>
									</li>
									))}
									<li>
										<Link to="/register">
											<button className="register">Get Started</button>
										</Link>
									</li>
									<li>
										<div onClick={toggleDarkMode} className="dropdown-darkMode">
											{darkModeStatus}
										</div>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
};

export default withRouter(Nav);
