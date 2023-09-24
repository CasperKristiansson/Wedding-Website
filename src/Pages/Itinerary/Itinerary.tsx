import React from 'react';
import { createUseStyles } from 'react-jss';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Icon } from '../OurStory/OurStory';

const useStyles = createUseStyles({
  container: {
    position: 'relative',
    maxWidth: '100%',
    height: 600,
    maxHeight: 600,
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
    lineHeight: '0',
    background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 80%)',
    padding: "20px 0"
  },
  heading: {
    fontSize: '55px',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Cinzel', serif",
    '@media (max-width: 800px)': {
      fontSize: '50px',
    },
    '@media (max-width: 560px)': {
      fontSize: '50px',
      lineHeight: '1.2',
    },
  },
  rsvpContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 0',
  },
  rsvpDate: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    width: '60%',
    '@media (max-width: 699px)': {
      width: '80%',
    },
  },
  googleMapsLink: {
    fontSize: '14px',
    color: '#007bff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Itinerary: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{overflow: "hidden"}}>
      <div className={classes.container}>
        <img
          src={process.env.PUBLIC_URL + "assets/Wedding Images/07. 02. 2023-215 - Copy.jpg"}
          alt="Wedding"
          className={classes.image}
        />
        <div className={classes.textContainer}>
          <h2 className={classes.heading}>Itinerary</h2>
        </div>
      </div>
      <div className={classes.rsvpContainer}>
        <p className={classes.rsvpDate}>The Wedding takes place on Saturday, June 29th. Before the wedding day there will be optional events open to whoever wants to join. Make sure to fill in the RSVP if interested in joining.</p>
      </div>
      <VerticalTimeline
        lineColor='#C1C69D'
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="Monday, June 24th"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(process.env.PUBLIC_URL + "/assets/External/rooftop.png")}
        >
          <h3 className="vertical-timeline-element-title">Stockholm Tour and Rooftop Bar Guide with Fanny and Nathaniel</h3>
          <p>
            Fanny and Nate will take you through a walking tour of downtown Stockholm, to museums, rooftop bars, and the best spots for food, drinks and shopping​
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="Tuesday, June 25th"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(process.env.PUBLIC_URL + "/assets/External/cruise.png")}
        >
          <h3 className="vertical-timeline-element-title">Day Cruise in Achapelago’s</h3>
          <p>
            Day Cruise from Stockholm to Finland and back. Enjoy the beautiful views of the Swedish archipelago, great food, drinks and entertainments! Departure 7:45AM and return 6:55PM​
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="Thursday, June 27th"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(process.env.PUBLIC_URL + "/assets/External/grill.png")}
        >
          <h3 className="vertical-timeline-element-title">BBQ at Kristiansson</h3>
          <p>
            Join us for some great BBQ and Jonas’ homebrewed beer at Fanny’s family’s home.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="Saturday, June 29th"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(process.env.PUBLIC_URL + "/assets/External/dance.png")}
        >
          <h3 className="vertical-timeline-element-title">Wedding Day</h3>
          <p>
            Read more about the wedding day here <a href="/wedding-day" className={classes.googleMapsLink}>Wedding Day</a>.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Itinerary;
