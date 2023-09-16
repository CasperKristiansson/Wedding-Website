import React from 'react';
import { createUseStyles } from 'react-jss';
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
      lineHeight: '1',
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
        src={process.env.PUBLIC_URL + "assets/Wedding Images/Picture8.jpg"}
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
          date="Saturday, June 29th 3:00pm"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(danceImage)}
        >
          <h3 className="vertical-timeline-element-title">Ceremony</h3>
          <h4 className="vertical-timeline-element-subtitle">SÅNGA KYRKA</h4>
          <p>
            The Ceremony will start at 3pm at SÅNGA KYRKA. Afterwards there will be photo and celebration before we head towards the reception. 
            SÅNGA PRÄSTGÅRDS VÄG 1, 179 96 SÅNGA, SWEDEN
            <a
              className={classes.googleMapsLink}
              href={"https://www.google.com/maps/place/S%C3%A5nga+Pr%C3%A4stg%C3%A5rds+v%C3%A4g+1,+179+96+Svartsj%C3%B6/@59.3580725,17.7051112,17z/data=!3m1!4b1!4m6!3m5!1s0x465f0a61c1bf73c5:0x9a9ab65e363fabbd!8m2!3d59.3580725!4d17.7076861!16s%2Fg%2F11kqnh6v7t?entry=ttu"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="Saturday, June 29th 5:00pm"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(danceImage)}
        >
          <h3 className="vertical-timeline-element-title">Reception</h3>
          <h4 className="vertical-timeline-element-subtitle">Ekebyhovs Slott</h4>
          <p>
            After the ceromy we will head to the reception area at Ekebyhovs Slott. Thre we will celebrate, eat delvcisious food, dance and party all night Björkuddsvägen 107, 178 34 Ekerö, Sweden
            <a
              className={classes.googleMapsLink}
              href={"https://www.google.com/maps/place/Bj%C3%B6rkuddsv%C3%A4gen+107,+178+34+Eker%C3%B6/@59.2827139,17.8121543,17z/data=!3m1!4b1!4m6!3m5!1s0x465f7489aef3d7e1:0xacbb1cb4e573896b!8m2!3d59.2827139!4d17.8147292!16s%2Fg%2F11c43xkwhv?entry=ttu"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
          date="Sunday, June 30th 2pm"
          contentStyle={{ background: '#C1C69D', color: '#fff' }}
          iconStyle={{ background: '#C1C69D' }}
          icon={Icon(danceImage)}
        >
          <h3 className="vertical-timeline-element-title">Gift Opening</h3>
          <h4 className="vertical-timeline-element-subtitle">Kristiansson’s Home</h4>
          <p>
            The day after the wedding we will have coffee and small bites at Kristiansson’s home for those who are able to attend. Fanny and Nathaniel will open the wedding gifts that you all got them Glaedjevaegne 29, 16575 Haesselby, Sweden
            <a
              className={classes.googleMapsLink}
              href={"https://www.google.com/maps/place/Gl%C3%A4djev%C3%A4gen+29,+165+75+H%C3%A4sselby/@59.3838393,17.802766,17z/data=!3m1!4b1!4m6!3m5!1s0x465fa01ef7841cad:0x3edbaea69aa6f89!8m2!3d59.3838393!4d17.8053409!16s%2Fg%2F11c4n2_cgp?entry=ttu"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </>
  );
};

export default WeddingDay;
