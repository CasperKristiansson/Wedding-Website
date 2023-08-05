import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {NavLink, useNavigate} from 'react-router-dom';

const useStyles = createUseStyles({
		navbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '5px 1rem',
			width: "calc(100vw - 2rem)",
			backgroundColor: "black",
			height: "60px",
		},
		logo: {
			display: 'flex',
			alignItems: 'center',
			color: '#333',
			textDecoration: 'none',
			width: "500px",
			'&:hover': {
				color: '#000',
			},
			'& span': {
				color:"white",
				fontSize: '2.5rem',
				marginTop: 6,
				marginLeft: 15,
				fontFamily: "'Poppins', sans-serif",
				"@media (max-width: 1150px)": {
					fontSize: '2rem',
					marginLeft: 10,
				},
			},
		},
		logoIcon: {
			marginRight: '0.5rem',
			fontSize: '1.5rem',
		},
		navLinks: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			gap: '1.2rem',
		},
		profileButton: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: 0,
			minWidth: 'auto',
			backgroundColor: 'transparent',
			border: 'none',
			cursor: 'pointer',
		},
		profileAvatar: {
			width: '2rem',
			height: '2rem',
			marginRight: '0.5rem',
		},
		logoImage: {
			height: 35,
			"@media (max-width: 1150px)": {
				height: 25,
			},
		},
    navLink: {
			color: "white",
			textDecoration: 'none',
			'&:hover': {
				color: '#75BC5B',
			},
			'&.active': {
				color: '#75BC5B',
			},
		},
});

export const Navigation: React.FC<{}> = (): JSX.Element => {
	const classes = useStyles();
	
	return (
		<div className={classes.navbar}>
			<NavLink to="/" className={classes.logo}>
				<span>Fanny & Nathaniel</span>
			</NavLink>
			<div className={classes.navLinks}>
        <NavLink to="/" className={classes.navLink}>
          Home
        </NavLink>
        <NavLink to="/rsvp" className={classes.navLink}>
          RSVP
        </NavLink>
        <NavLink to="/gifts" className={classes.navLink}>
          Gifts
        </NavLink>
        <NavLink to="/our-story" className={classes.navLink}>
          Our Story
        </NavLink>
        <NavLink to="/wedding-day" className={classes.navLink}>
          Wedding Day
        </NavLink>
        <NavLink to="/stockholm-tips" className={classes.navLink}>
          Stockholm Tips
        </NavLink>
        <NavLink to="/qa" className={classes.navLink}>
          Q&A
        </NavLink>
			</div>
		</div>
	);
}