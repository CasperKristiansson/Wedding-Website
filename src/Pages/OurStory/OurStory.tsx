import React from 'react';
import { createUseStyles } from 'react-jss';
import startImage from "../../assets/Wedding Images/07. 02. 2023-57.jpg"
import startImageTwo from "../../assets/Wedding Images/07. 02. 2023-58.jpg"
import utils from "../../assets/External/1_side.png"
import { Gallery } from "react-grid-gallery";
import { images } from "./Images";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import danceImage from "../../assets/Icons/dance.png"


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
  },
  containerDescriptionTwo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '100px 5% 100px 5%',
    '& > *': {
      margin: '0 50px',
    },
  },
  leftColumn: {
    flex: 1,
    marginLeft: '20px',
  },
  rightColumn: {
    flex: 1,
    position: 'relative',
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
  },
  imageReverse: {
    position: 'absolute',
    height: '100%',
    transform: 'scaleX(-1)',
    right: 0,
  },
  galleryContainer: {
    padding: '50px 5% 50px 5%',
  },
});

const OurStory: React.FC = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <img
        src={utils}
        alt="Wedding"
        className={classes.image}
      />
      <img
        src={utils}
        alt="Wedding"
        className={classes.imageReverse}
      />
      <div className={classes.title}>Our Story</div>
      <div className={classes.containerDescription}>
        
        <div className={classes.leftColumn}>
          <img
            src={startImage}
            alt="How It Works"
            className={classes.imageDescription}
          />
        </div>
        <div className={classes.rightColumn}>
          <div className={classes.loremText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptate maiores nobis molestias tempore labore eligendi architecto vel sint accusantium. Alias, minima. Perferendis suscipit quisquam omnis deleniti accusamus amet voluptates, perspiciatis ipsam! Mollitia error, voluptatem reiciendis placeat nihil quidem aspernatur nemo magnam maiores vitae perspiciatis facilis, repellendus explicabo, sed iure molestiae maxime. Officiis reprehenderit ducimus suscipit rerum amet qui, eligendi et sapiente error rem quisquam quo unde fugiat perspiciatis inventore placeat, debitis ea illum eveniet autem! Aperiam quod itaque minus, enim quia laborum, quis quam dicta quaerat eligendi suscipit maiores eaque aut saepe fuga nulla. Modi vero ipsam iure ipsum quisquam dolorum eum in dolore officia, voluptate, nostrum soluta rem expedita nam reiciendis fugit perspiciatis voluptatibus esse ex labore impedit! Maxime nisi dicta voluptates! Et eos ipsa iure tempora excepturi nesciunt, sint sunt voluptate commodi pariatur odio quisquam vitae, recusandae doloribus architecto adipisci quibusdam placeat eveniet tempore alias ut provident porro non perspiciatis. Sed expedita animi illum assumenda cupiditate voluptatem, possimus quasi ipsam id tenetur repudiandae blanditiis, voluptatibus ipsum, impedit hic voluptate a sint doloremque distinctio consequuntur ea ratione. Laboriosam asperiore
          </div>
        </div>
      </div>
    </div>
    <div className={classes.containerDescriptionTwo} style={{backgroundColor: "#C1C69D", zIndex: "-2"}}>
      <div className={classes.leftColumn}>
        <div className={classes.loremText} style={{color: "white"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit voluptate maiores nobis molestias tempore labore eligendi architecto vel sint accusantium. Alias, minima. Perferendis suscipit quisquam omnis deleniti accusamus amet voluptates, perspiciatis ipsam! Mollitia error, voluptatem reiciendis placeat nihil quidem aspernatur nemo magnam maiores vitae perspiciatis facilis, repellendus explicabo, sed iure molestiae maxime. Officiis reprehenderit ducimus suscipit rerum amet qui, eligendi et sapiente error rem quisquam quo unde fugiat perspiciatis inventore placeat, debitis ea illum eveniet autem! Aperiam quod itaque minus, enim quia laborum, quis quam dicta quaerat eligendi suscipit maiores eaque aut saepe fuga nulla. Modi vero ipsam iure ipsum quisquam dolorum eum in dolore officia, voluptate, nostrum soluta rem expedita nam reiciendis fugit perspiciatis voluptatibus esse ex labore impedit! Maxime nisi dicta voluptates! Et eos ipsa iure tempora excepturi nesciunt, sint sunt voluptate commodi pariatur odio quisquam vitae, recusandae doloribus architecto adipisci quibusdam placeat eveniet tempore alias ut provident porro non perspiciatis. Sed expedita animi illum assumenda cupiditate voluptatem, possimus quasi ipsam id tenetur repudiandae blanditiis, voluptatibus ipsum, impedit hic voluptate a sint doloremque distinctio consequuntur ea ratione. Laboriosam asperiore
        </div>
      </div>
      <div className={classes.rightColumn}>
        <img
          src={startImageTwo}
          alt="How It Works"
          className={classes.imageDescription}
        />
      </div>
    </div>
    <div className={classes.galleryContainer}>
      <Gallery
        images={images}
        enableImageSelection={false}
        rowHeight={300}
        maxRows={2}
      />
    </div>
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
    <div className={classes.galleryContainer}>
      <Gallery
        images={images}
        enableImageSelection={false}
        rowHeight={300}
        maxRows={2}
      />
    </div>
    </>
  );
};

function Icon(source: string | undefined) {
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
