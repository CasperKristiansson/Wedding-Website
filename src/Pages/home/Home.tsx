import React from 'react';
import { createUseStyles } from 'react-jss';
import startImage from "../../assets/Wedding Images/Start Page.jpg"
import ourStoryImage from "../../assets/Wedding Images/07. 02. 2023-215.jpg"
import flowersThree from "../../assets/External/3.png"
import flowersOne from "../../assets/External/1.png";
import flowersTwo from "../../assets/External/2.png";
import stockholm from "../../assets/External/stockholm.png";
import flower from "../../assets/External/flower.png";

const Home: React.FC = () => {
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
    subheading: {
      fontSize: '35px',
      color: '#fff',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      fontFamily: "'Cinzel', serif",
    },
    containerStory: {
      position: 'relative',
      width: '100%',
    },
    backgroundImage: {
      width: '600px',
      zIndex: 1,
      position: 'absolute',
      left: 0,
      marginTop: -300,
    },
    title: {
      textAlign: 'center',
      fontSize: '64px',
      fontWeight: 'bold',
      zIndex: 3,
			fontFamily: "WindSong, cursive",
    },
    columnsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '30px',
      padding: '0 30px',
      zIndex: 3,
    },
    leftColumn: {
      flex: 1,
      marginRight: '10px',
    },
    rightColumn: {
      flex: 1,
      marginLeft: '10px',
    },
    loremText: {
      fontSize: '26px',
      padding: "0 40px",
    },
    columnImage: {
      width: '100%',
    },
    containerLocation: {
      height: 400,
      marginTop: 0,
      backgroundColor: '#C1C69D',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      lineHeight: 0.7,
    },
    leftImage: {
      position: 'absolute',
      top: 123,
      left: 0,
      transform: 'rotate(-90deg)',
      width: 400,
      marginLeft: -125,
    },
    rightImage: {
      position: 'absolute',
      top: 81,
      right: 0,
      transform: 'rotate(-90deg)',
      width: 400,
      marginRight: -81,
    },
    headingLocation: {
      textAlign: 'center',
      fontSize: '64px',
      fontWeight: 'bold',
      zIndex: 3,
			fontFamily: "WindSong, cursive",
      color: "white",
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    },
    subheadingLocation: {
      fontSize: '35px',
      color: '#fff',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      fontFamily: "'Cinzel', serif",
    },
    flowerContainer: {
      position: 'relative',
    },
    containerOurStory: {
      padding: '75px 0',
    },
    containerStockholm: {
      position: 'relative',
      height: 200,
    },
    imageStockholm: {
      position: 'absolute',
      height: 400,
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: -200,
    },
    homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    titleAbout: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    columnsContainerAbout: {
      display: 'flex',
      width: '60%',
      margin: '0 auto',
    },
    column: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
    },
    middleColumn: {
      flex: '0.5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageAbout: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    whereTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    address: {
      fontSize: '18px',
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
        <h2 className={classes.heading}>WE ARE GETTING MARRIED</h2>
        <p className={classes.subheading}>June 29th, 2024</p>
      </div>
    </div>
    <div className={classes.flowerContainer}>
      <img
        className={classes.backgroundImage}
        src={flowersThree}
        alt="Background"
        />
    </div>
    <div className={classes.containerOurStory}>
      <div className={classes.title}>Our Story</div>
      <div className={classes.columnsContainer}>
        <div className={classes.leftColumn}>
          <p className={classes.loremText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu velit id velit
            tincidunt interdum. Nulla facilisi. Sed tincidunt dolor id nisl varius, vel commodo
            nunc euismod.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu velit id velit
            tincidunt interdum. Nulla facilisi. Sed tincidunt dolor id nisl varius, vel commodo
            nunc euismod.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu velit id velit
            tincidunt interdum. Nulla facilisi. Sed tincidunt dolor id nisl varius, vel commodo
            nunc euismod.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu velit id velit
            tincidunt interdum. Nulla facilisi. Sed tincidunt dolor id nisl varius, vel commodo
            nunc euismod.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu velit id velit
            tincidunt interdum. Nulla facilisi. Sed tincidunt dolor id nisl varius, vel commodo
            nunc euismod. 
          </p>
        </div>
      <div className={classes.rightColumn}>
        <img
          className={classes.columnImage}
          src={ourStoryImage}
          alt="Right Column"
        />
      </div>
    </div>
  </div>
  <div className={classes.containerLocation}>
    <img src={flowersOne} alt="Left" className={classes.leftImage} />
    <img src={flowersTwo} alt="Right" className={classes.rightImage} />
    <div>
      <h1 className={classes.headingLocation}>Location</h1>
      <p className={classes.subheadingLocation}>Stockholm, Sweden</p>
    </div>
  </div>
  <div className={classes.containerStockholm}>
    <img
      src={stockholm}
      alt="Stockholm"
      className={classes.imageStockholm}
    />
  </div>
  <div className={classes.homeContainer}>
    <div className={classes.title}>The Wedding Day</div>
    <div className={classes.columnsContainerAbout}>
      <div className={classes.column}>
        <div className={classes.whereTitle}>When</div>
        <div className={classes.address}>Sunday, Sep 23 2024</div>
        <div className={classes.address}>Wedding Ceremony 10am</div>
        <div className={classes.address}>Wedding Reception 12am</div>
      </div>
      <div className={`${classes.column} ${classes.middleColumn}`}>
        <img
          className={classes.imageAbout}
          src={flower}
          alt="Flower"
        />
      </div>
      <div className={classes.column}>
        <div className={classes.whereTitle}>Where</div>
        <div className={classes.address}>Your Address in Sweden</div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Home;
