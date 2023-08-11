import React from 'react';
import { createUseStyles } from 'react-jss';
import startImage from "../../assets/Wedding Images/Gifts.jpg"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Icon } from '../OurStory/OurStory';
import danceImage from "../../assets/Icons/dance.png"


const WeddingDay: React.FC = () => {
  const useStyles = createUseStyles({
    container: {
      position: 'relative',
      maxWidth: '100%',
      height: 550,
      maxHeight: 550,
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    textContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      textAlign: 'center',
      lineHeight: '0.5',
      background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 80%)',
      padding: '20px 0',
    },
    heading: {
      fontSize: '55px',
      fontWeight: 'bold',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      fontFamily: "'Cinzel', serif"
    },
    timelineContainer: {
      padding: "50px 0",
    },
    weddingDescription: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      marginBottom: '20px',
    },
    weddingText: {
      fontSize: '16px',
      lineHeight: '1.5',
      marginBottom: '10px',
      textAlign: 'center',
    },
    googleMapsLink: {
      fontSize: '14px',
      color: '#007bff',
      textDecoration: 'none',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  });

  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <img
        src={startImage}
        alt="Wedding"
        className={classes.image}
      />
      <div className={classes.textContainer}>
        <h2 className={classes.heading}>The Wedding Day</h2>
      </div>
    </div>
    <div className={classes.timelineContainer}>
      <VerticalTimeline
        lineColor='#C1C69D'
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="2011 - present"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(danceImage)}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="2011 - present"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(danceImage)}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="2011 - present"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(danceImage)}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    <div className={classes.weddingDescription}>
      <p className={classes.weddingText}>
        Location of the wedding ceremony and reception: <br />
        Glädjevägen 29, 165 75 Hässelby
      </p>
      <a
        className={classes.googleMapsLink}
        href={"https://www.google.com/maps/place/Gl%C3%A4djev%C3%A4gen+29,+165+75+H%C3%A4sselby/@59.3838393,17.802766,17z/data=!3m1!4b1!4m6!3m5!1s0x465fa01ef7841cad:0x3edbaea69aa6f89!8m2!3d59.3838393!4d17.8053409!16s%2Fg%2F11c4n2_cgp?entry=ttu"}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA */}
        View on Google Maps
        <img
          src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA"
          alt="Google Maps"
          width="200px"
        />
      </a>
    </div>
    </>
  );
};

export default WeddingDay;
