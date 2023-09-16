import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {NavLink} from 'react-router-dom';

const useStyles = createUseStyles({
		navbar: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			padding: '5px 1rem',
			width: "calc(100vw - 3.5rem)",
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
					fontSize: '3rem',
					marginLeft: 10,
				},
        "@media (max-width: 600px)": {
					fontSize: '1.5rem',
					marginLeft: 10,
				},
			},
		},
		navLinks: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
			gap: '1.2rem',
      "@media (max-width: 1180px)": {
        display: 'none',
      },
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
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      "@media (max-width: 1180px)": {
        display: 'flex',
      },
    },
    bar: {
      width: '25px',
      height: '3px',
      backgroundColor: '#333',
      margin: '3px 0',
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column',
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: 'white',
      zIndex: 1000,
      padding: '1rem 0', // Add padding to the top and bottom
      boxShadow: "0 2px 2px -2px gray",
      "@media (max-width: 1180px)": {
        display: (props: { isOpen: boolean }) => props.isOpen ? 'flex' : 'none',
      },
    },
    mobileNavLink: { // New style specifically for mobile nav links
      color: "black",
			textDecoration: 'none',
			'&:hover': {
        color: "#85ad52",
			},
			'&.active': {
        color: "#85ad52",
			},
      fontSize: '1.5rem', // Increase font size
      padding: '0.5rem 0', // Add vertical padding to each link
      textAlign: 'center', // Center the text
    }
});

export const Navigation: React.FC<{}> = (): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles({ isOpen });
	
	return (
    <div className={classes.navbar}>
      <NavLink to="/" className={classes.logo}>
        <span>Fanny & Nathaniel</span>
      </NavLink>
      <div className={classes.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
        <div className={classes.bar}></div>
      </div>
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
        <NavLink to="/itinerary" className={classes.navLink}>
          Itinerary
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
      <div className={classes.mobileMenu}>
        <NavLink to="/" className={classes.mobileNavLink}>
          Home
        </NavLink>
        <NavLink to="/rsvp" className={classes.mobileNavLink}>
          RSVP
        </NavLink>
        <NavLink to="/gifts" className={classes.mobileNavLink}>
          Gifts
        </NavLink>
        <NavLink to="/our-story" className={classes.mobileNavLink}>
          Our Story
        </NavLink>
        <NavLink to="/wedding-day" className={classes.mobileNavLink}>
          Wedding Day
        </NavLink>
        <NavLink to="/stockholm-tips" className={classes.mobileNavLink}>
          Stockholm Tips
        </NavLink>
        <NavLink to="/qa" className={classes.mobileNavLink}>
          Q&A
        </NavLink>
        <NavLink to="/itinerary" className={classes.mobileNavLink}>
          Itinerary
        </NavLink>
      </div>
    </div>
	);
}