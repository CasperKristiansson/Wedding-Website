import React from 'react';
import { createUseStyles } from 'react-jss';
import {NavLink} from 'react-router-dom';

const useStyles = createUseStyles({
		navbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '5px 1rem',
			width: "calc(100vw - 2rem)",
			backgroundColor: "white",
			height: "70px",
      boxShadow: "0 2px 2px -2px gray",
		},
		logo: {
			display: 'flex',
			alignItems: 'center',
			textDecoration: 'none',
			width: "500px",
			'& span': {
				color:"black",
				fontSize: '3rem',
				marginTop: 6,
				marginLeft: 15,
				fontFamily: "WindSong, cursive",
				"@media (max-width: 1150px)": {
					fontSize: '2rem',
					marginLeft: 10,
				},
			},
		},
		navLinks: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			gap: '1.2rem',
		},
    navLink: {
			color: "black",
			textDecoration: 'none',
			'&:hover': {
        color: "#85ad52",
			},
			'&.active': {
        color: "#85ad52",
			},
      fontSize: "1.2rem",
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