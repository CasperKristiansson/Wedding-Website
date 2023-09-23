import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

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
    padding: "20px 0",
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
  subheading: {
    fontSize: '35px',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
    fontFamily: "'Cinzel', serif",
    '@media (max-width: 560px)': {
      fontSize: '26px',
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
  titleB: {
    textAlign: 'center',
    fontSize: '50px',
    fontWeight: 'bold',
    zIndex: 3,
    fontFamily: "WindSong, cursive",
  },
  rsvpDate: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    width: '60%',
    '@media (max-width: 699px)': {
      width: '80%',
      fontSize: '1rem',
    },
  },
  title: {
    textAlign: 'center',
    fontSize: '32px',
    fontWeight: 'bold',
    zIndex: 3,
    // less than 700px
    '@media (max-width: 699px)': {
      fontSize: '22px',
      textAlign: 'left',
    },
  },
  loremText: {
    fontSize: '26px',
    padding: "0 40px",
    '@media (max-width: 1199px)': {
      padding: "0 20px",
      '& li': {
        textAlign: 'left',
      }
    },
    '@media (max-width: 700px)': {
      fontSize: '14px',
      padding: "0px",
      textAlign: 'left',
    }
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    '@media (max-width: 1199px)': {
      marginBottom: '20px',  // Adjust this to your preference
    }
  },
  button: {
    fontSize: '1.5rem',
    textDecoration: 'none',
    padding: '0.8rem 2.5rem',
    border: '2px solid #333',
    borderRadius: '8px',
    color: 'white',
    backgroundColor: '#B2BA99',
    borderColor: '#B2BA99',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
      backgroundColor: '#97AA55',
    }
  },
  containerOurStoryB: {
    padding: '25px 0',
    position: 'relative',
    '@media (max-width: 1199px)': {
      display: 'none',
    },
  },
  leftColumnB: {
    flex: 1,
    marginRight: '10px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 1199px)': {
      marginRight: 0,
      marginBottom: '20px',  // Adjust this to your preference
      padding: "0px",  // Adjust padding as necessary
    }
  },
  rightColumnBB: {
    flex: 1,
    marginLeft: '10px',
    '@media (max-width: 1199px)': {
      marginLeft: 0,
      textAlign: 'center',
    },
  },
  containerOurStoryE: {
    padding: '75px 0',
    position: 'relative',
    '@media (min-width: 1199px)': {
      display: 'none',
    },
  },
  containerOurStory: {
    padding: '25px 0',
    position: 'relative',
  },
  columnsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    padding: '0 30px',
    '@media (max-width: 1199px)': {
      flexDirection: 'column',
    }
  },
  columnReversed: {
    flexDirection: 'column-reverse',
    '@media (min-width: 1200px)': {
      flexDirection: 'row',
    }
  },
  leftColumn: {
    flex: 1,
    marginRight: '10px',
    '@media (max-width: 1199px)': {
      marginRight: 0,
      textAlign: 'center',
    },
  },
  rightColumn: {
    flex: 1,
    marginLeft: '10px',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width: 1199px)': {
      marginLeft: 0,
      padding: "0px",
    }
  },
  columnImage: {
    width: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 3,
    '@media (max-width: 1199px)': {
      maxWidth: '100%',
    }
  },
});

const Stockholm: React.FC = () => {
  const classes = useStyles();

  return (
    <div style={{overflow: "hidden"}}>
      <div className={classes.container}>
        <img
          src={process.env.PUBLIC_URL + "assets/Wedding Images/07. 02. 2023-50.jpg"}
          alt="Wedding"
          className={classes.image}
        />
        <div className={classes.textContainer}>
          <h2 className={classes.heading}>Stockholm Tips</h2>
        </div>
      </div>
      <div className={classes.rsvpContainer}>
        <div className={classes.titleB}>Stockholm</div>
        <p className={classes.rsvpDate}>
          Stockholm, the capital city of Sweden, lies on a number of islands and peninsulas at the outflow of Lake Mälar into the Baltic.
          This vibrant, modern city offers an astounding number of historic attractions, from architectural splendors like the Royal Palace to entire neighborhoods like Gamla Stan, Stockholm's Old Town district. If you want even more history, you can visit world-class museums like the Skansen Open-Air Museum or the Stockholm Medieval Museum, and if you're here for Vikings, the Vasa Museum should be at the top of your list of things to do. Stockholm is also home to excellent art galleries and other world-class museums, but if you want to spend more time outdoors, it offers both expansive parks and seemingly endless waterways and islands to explore. The Drottningholm Palace is just a ferry ride away, and the central location makes day trips from Stockholm easy. To learn more about the many tourist attractions and places to visit in Fanny’s hometown, be sure to read through our list of the best things to do in Stockholm below!
        </p>
      </div>


      <div className={classes.containerOurStory}>
        <div className={`${classes.columnsContainer}`}>
          <div className={classes.leftColumn}>
            <div className={classes.title}>Explore the Old Town Stockholm: Gamla Stan</div>
            <p className={classes.loremText}>
              Dating from the 1200s and crammed with must-see sights, attractions, cafés, authentic restaurants, and boutique shops, the area of <strong>Gamla Stan (Old Town)</strong> is a living, breathing museum in its own right. It's often a first stop for tourists in Stockholm and is among the most <a href="https://www.planetware.com/tourist-attractions/sweden-s.html" target="_blank"> to visit in Sweden.</a>
            </p>
          </div>
        <div className={classes.rightColumn}>
          <img
            className={classes.columnImage}
            src={process.env.PUBLIC_URL + "assets/Stockholm/1.jpg"}
            alt="Right Column"
          />
        </div>
      </div>
    </div>
    <div className={classes.containerOurStory}>
      <div className={`${classes.columnsContainer} ${classes.columnReversed}`}>
        <div className={classes.rightColumn}>
          <img
            className={classes.columnImage}
            src={process.env.PUBLIC_URL + "assets/Stockholm/2.jpg"}
            alt="Right Column"
          />
        </div>
        <div className={classes.leftColumn}>
          <div className={classes.title}>
            Take a Stroll and See the Sights of Djurgården
          </div>
          <p className={classes.loremText}>
            A tranquil oasis in the heart of the city, the island of <strong>Djurgården</strong> draws crowds of tourists and locals alike. It's particularly busy during the summer months of long lazy days and short nights.
            The park forms part of the <a href="https://www.kungligaslotten.se/english/royal-palaces-and-sites/royal-national-city-park/about-the-national-city-park.html" target="_blank">Royal National City Park</a>, which is the perfect place for a stroll and picnic, as well as being home to several of Stockholm's top museums and other attractions.
            Scattered about are pleasant cafés, restaurants, snack bars, and hotels. You can rent bicycles to explore the forest trails or, if you're feeling adventurous, take to the waterways in a canoe. The popular <strong>Vasa Museum</strong> and <strong>ABBA the Museum</strong> are located here, as is the open-air museum <strong>Skansen</strong> and <strong>Gröna Lund</strong> amusement park.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Stockholm;
