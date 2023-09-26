import React from 'react';
import { createUseStyles } from 'react-jss';
import { Gallery } from "react-grid-gallery";
import { images } from "./Images";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import danceImage from "../../assets/Icons/dance.png"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const useStyles = createUseStyles({
  title: {
    fontSize: '58px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontFamily: "'Cinzel', serif",
    marginLeft: '22px',
    textAlign: 'center',
    paddingTop: '50px',
  },
  containerDescription: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 5% 50px 5%',
    position: 'relative',
    '& > *': {
      margin: '0 50px',
    },
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
    },
  },
  containerDescriptionTwo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 5% 50px 5%',
    '& > *': {
      margin: '0 50px',
    },
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
    },
  },
  leftColumn: {
    flex: 1,
    marginLeft: '20px',
    '@media (max-width: 1200px)': {
      order: 1, // Image first
      margin: 0,
      marginBottom: '20px', // spacing between image and text on mobile
      // center it
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
  },
  rightColumn: {
    flex: 1,
    position: 'relative',
    '@media (max-width: 1200px)': {
      order: 2, // Text second
    },
  },
  titleDescription: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontFamily: "'Cinzel', serif",
    marginLeft: '22px',
  },
  imageDescription: {
    maxWidth: '100%',
  },
  backgroundContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  backgroundImg: {
    width: '100%',
  },
  loremText: {
    fontSize: '18px',
    lineHeight: '1.5',
  },
  container: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    height: '100%',
    '@media (max-width: 1200px)': {
      display: 'none',
    }
  },
  imageReverse: {
    position: 'absolute',
    height: '100%',
    transform: 'scaleX(-1)',
    right: 0,
    '@media (max-width: 1200px)': {
      display: 'none',
    }
  },
  imageReverseE: {
    position: 'absolute',
    height: '100%',
    transform: 'scaleX(-1)',
    right: 0,
    '@media (min-width: 1200px)': {
      display: 'none',
    },
    opacity: 0.5,
    
  },
  galleryContainer: {
    padding: '50px 5% 50px 5%',
  },
  imageGallery: {
    width: '75%',
    margin: 'auto',
  },
});

const OurStory: React.FC = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <img
        src={process.env.PUBLIC_URL + "/assets/External/1_side.png"}
        alt="Wedding"
        className={classes.image}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/External/1_side.png"}
        alt="Wedding"
        className={classes.imageReverse}
      />
      <img
        src={process.env.PUBLIC_URL + "/assets/External/1_side.png"}
        alt="Wedding"
        className={classes.imageReverseE}
      />
      <div className={classes.title}>Our Story</div>
      <div className={classes.containerDescription}>
        <div className={classes.leftColumn}>
          <img
            src={process.env.PUBLIC_URL + "/assets/Wedding Images/07. 02. 2023-57.jpg"}
            alt="How It Works"
            className={classes.imageDescription}
          />
        </div>
        <div className={classes.rightColumn}>
          <div className={classes.loremText}>
            Nathaniel, from a rural town in Pennsylvania, and Fanny, from the city of Stockholm in Sweden. We started as two student at Embry-Riddle Aeronautical University in Florida, but a tinder date later, endless texts & phone calls over the Atlantic, and a summer of adventure, our story began. After five years, we decided to spend the rest of our lives together as the sun was setting on top of a volcano in Santorini. Now we want to solidify our love infront of our family and friends as we begin this new chapter of our lives together.
          </div>
        </div>
      </div>
    </div>
    <div className={classes.containerDescriptionTwo} style={{backgroundColor: "#C1C69D", zIndex: "-2"}}>
      {/* <div className={classes.leftColumn}>
        <div className={classes.loremText} style={{color: "white"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptate maiores nobis molestias tempore labore eligendi architecto vel sint accusantium. Alias, minima. Perferendis suscipit quisquam omnis deleniti accusamus amet voluptates, perspiciatis ipsam! Mollitia error, voluptatem reiciendis placeat nihil quidem aspernatur nemo magnam maiores vitae perspiciatis facilis, repellendus explicabo, sed iure molestiae maxime. Officiis reprehenderit ducimus suscipit rerum amet qui, eligendi et sapiente error rem quisquam quo unde fugiat perspiciatis inventore placeat, debitis ea illum eveniet autem! Aperiam quod itaque minus, enim quia laborum, quis quam dicta quaerat eligendi suscipit maiores eaque aut saepe fuga nulla. Modi vero ipsam iure ipsum quisquam dolorum eum in dolore officia, voluptate, nostrum soluta rem expedita nam reiciendis fugit perspiciatis voluptatibus esse ex labore impedit! Maxime nisi dicta voluptates! Et eos ipsa iure tempora excepturi nesciunt, sint sunt voluptate commodi pariatur odio quisquam vitae, recusandae doloribus architecto adipisci quibusdam placeat eveniet tempore alias ut provident porro non perspiciatis. Sed expedita animi illum assumenda cupiditate voluptatem, possimus quasi ipsam id tenetur repudiandae blanditiis, voluptatibus ipsum, impedit hic voluptate a sint doloremque distinctio consequuntur ea ratione. Laboriosam asperiore
        </div>
      </div>
      <div className={classes.rightColumn}>
        <img
          src={process.env.PUBLIC_URL + "/assets/Wedding Images/07. 02. 2023-57.jpg"}
          alt="How It Works"
          className={classes.imageDescription}
        />
      </div> */}
    </div>
    <VerticalTimeline
      lineColor='#C1C69D'
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
        date="January 2018"
        contentStyle={{ background: '#C1C69D', color: '#fff' }}
        iconStyle={{ background: '#C1C69D' }}
        icon={Icon(danceImage)}
      >
        <h3 className="vertical-timeline-element-title">Moved in together</h3>
        <h4 className="vertical-timeline-element-subtitle">Daytona Beach, FL</h4>
        <p>
          Fanny moved in with Nathaniel in Laura's House at Tuscany Chase Drive in Daytona Beach. They both lived here until they graduated college. During this time they had Christopher Oliver, Nathan Wiley, and Shane Geis as roomates.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
        date="May 2017"
        contentStyle={{ background: '#C1C69D', color: '#fff' }}
        iconStyle={{ background: '#C1C69D' }}
        icon={Icon(danceImage)}
      >
        <h3 className="vertical-timeline-element-title">First Date</h3>
        <h4 className="vertical-timeline-element-subtitle">Daytona Beach, FL</h4>
        <p>
          Fanny was a freshman at Embry-Riddle, and Nathaniel was a Sophomore. At the beginning of summer, they matched on Tinder and went on their first date. Mini golf and dinner started their story together. 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
        date="August 2021"
        contentStyle={{ background: '#C1C69D', color: '#fff' }}
        iconStyle={{ background: '#C1C69D' }}
        icon={Icon(danceImage)}
      >
        <h3 className="vertical-timeline-element-title">First Place</h3>
        <h4 className="vertical-timeline-element-subtitle">Sanford, FL</h4>
        <p>
          After graduation, Fanny and Nathaniel moved into their first apartment in Sanford, Florida. Nathaniel worked as a flight instructor in Daytona Beach, and Fanny as a Transportation Engineer in Orlando
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid #C1C69D' }}
        date="July 2022"
        contentStyle={{ background: '#C1C69D', color: '#fff' }}
        iconStyle={{ background: '#C1C69D' }}
        icon={Icon(danceImage)}
      >
        <h3 className="vertical-timeline-element-title">The Proposal</h3>
        <h4 className="vertical-timeline-element-subtitle">Santorini, Greece</h4>
        <p>
          Fanny’s parents, Eva and Jonas, took Fanny and Nathaniel on a trip of a lifetime. Island jumping around Greece. Their trip took them to Santorini, where Eva and Jonas got engaged all those years ago. During their first evening there, Nathaniel got down on a knee and proposed to Fanny on top of a volcano as the sun was setting in the horizon. 
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
    <div className={classes.galleryContainer}>
      <Gallery
        images={images}
        enableImageSelection={false}
        rowHeight={300}
        maxRows={2}
      />
    </div>
    <div className={classes.imageGallery}>
      <ImageGallery
        items={images.map((image) => ({
          original: image.src,
          thumbnail: image.src,
        }))}
      />
    </div>
    </>
  );
};

export function Icon(source: string | undefined) {
  return <img
    src={source}
    alt="icon"
    style={{
      width: "75%",
      height: "75%",
      objectFit: "cover",
      objectPosition: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />;
}

export default OurStory;
