import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const useStyles = createUseStyles({
    container: {
      position: 'relative',
      maxWidth: '100%',
      height: 700,
      maxHeight: 700,
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
    },
    heading: {
      fontSize: '55px',
      fontWeight: 'bold',
      color: '#fff',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      fontFamily: "'Cinzel', serif",
      '@media (max-width: 800px)': {
        fontSize: '40px',
      },
      '@media (max-width: 560px)': {
        fontSize: '26px',
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
    containerStory: {
      position: 'relative',
      width: '100%',
    },
    backgroundImage: {
      width: '500px',
      zIndex: 1,
      position: 'absolute',
      left: 0,
      marginTop: -300,
      '@media (max-width: 1300px)': {
        left: '50%',
        transform: 'translateX(-50%)',
        marginTop: -420,
      },
    },
    backgroundImageB: {
      width: '900px',
      zIndex: 1,
      position: 'absolute',
      left: -75,
      marginTop: -200,
      '@media (max-width: 1199px)': {
        marginTop: -180,
        left: '50%',
        transform: 'translateX(-50%)',
      },
      '@media (max-width: 649px)': {
        marginTop: -100,
        width: "500px",
      },
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
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '30px',
      padding: '0 30px',
      '@media (max-width: 1199px)': {
        flexDirection: 'column',
      }
    },
    leftColumn: {
      flex: 1,
      marginRight: '10px',
      '@media (max-width: 1199px)': {
        marginRight: 0,
        marginTop: '20px',  // Adjust this to your preference
        textAlign: 'center',
      },
    },
    rightColumnBB: {
      flex: 1,
      marginLeft: '10px',
      '@media (max-width: 1199px)': {
        marginLeft: 0,
        marginTop: '20px',  // Adjust this to your preference
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
        marginBottom: '20px',  // Adjust this to your preference
        padding: "0px",  // Adjust padding as necessary
      }
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
    rightColumnB: {
      flex: 1,
      marginLeft: '10px',
      display: 'flex',
      justifyContent: 'center',
      '@media (max-width: 1199px)': {
        marginLeft: 0,
        marginBottom: '20px',  // Adjust this to your preference
        padding: "0px",  // Adjust padding as necessary
        marginTop: '150px',  // Adjust this to your preference
        position: 'relative',
      }
    },
    loremText: {
      fontSize: '26px',
      padding: "0 40px",
      '@media (max-width: 1199px)': {
        padding: "0 20px",  // Adjust padding as necessary
        // all li should be aligned left
        '& li': {
          textAlign: 'left',
        }
      },
      '@media (max-width: 700px)': {
        fontSize: '18px',
        padding: "0px",  // Adjust padding as necessary
      }
    },
    columnImage: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: 3,
      '@media (max-width: 1199px)': {
        maxWidth: '100%',  // Adjust the image size as needed
      }
    },
    columnImageB: {
      width: '700px',
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: -1,
      '@media (max-width: 1199px)': {
        maxWidth: '100%',  // Adjust the image size as needed
      }
    },
    containerLocation: {
      height: 400,
      marginTop: 0,
      backgroundColor: '#B2BA99',
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
    flowerContainerB: {
      position: 'relative',
      // less than 1200px width
      '@media (max-width: 1199px)': {
        position: 'absolute',
      },
    },
    flowerContainer: {
      position: 'relative',
    },
    containerOurStory: {
      padding: '75px 0',
      position: 'relative',
    },
    containerOurStoryB: {
      padding: '75px 0',
      position: 'relative',
      '@media (max-width: 1199px)': {
        display: 'none',
      },
    },
    containerOurStoryE: {
      padding: '75px 0',
      marginTop: "150px",
      position: 'relative',
      '@media (min-width: 1199px)': {
        display: 'none',
      },
    },
    containerStockholm: {
      position: 'relative',
      height: 400,
      marginBottom: -100,
    },
    imageStockholm: {
      position: 'absolute',
      height: 400,
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: -200,
      maxHeight: '100%',
      width: 'auto',
    },
    homeContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px',
      paddingBottom: "100px"
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
      '@media (max-width: 999px)': {
        width: '100%',
      },
      '@media (max-width: 449px)': {
        flexDirection: 'column',
      },
    },
    column: {
      flex: '1',
      display: 'flex',
      flexDirection: 'column',
      '@media (max-width: 449px)': {
        marginBottom: '20px',
      },
    },
    middleColumn: {
      flex: '0.5',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 999px)': {
        flex: '1',
      },
    },
    imageAbout: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    whereTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
    address: {
      fontSize: '22px',
    },
    rsvpContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 0',
    },
    rsvpHeading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontFamily: "'Cinzel', serif",
    },
    rsvpDate: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },
    rsvpLink: {
      fontSize: '1.5rem',
      textDecoration: 'none',
      padding: '0.8rem 2.5rem',
      border: '2px solid #333',
      borderRadius: '8px',
      color: '#333',
      borderColor: '#B2BA99',
      '&:hover': {
        backgroundColor: '#B2BA99',
        color: 'white',
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
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
      '@media (max-width: 1199px)': {
        marginBottom: '20px',  // Adjust this to your preference
      }
    },
    zIndex: {
      zIndex: 3,
    }
  });

  const classes = useStyles();

  return (
    <div style={{overflow: "hidden"}}>
      <div className={classes.container}>
        <img
          src={process.env.PUBLIC_URL + "assets/Wedding Images/Start Page2.png"}
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
          src={process.env.PUBLIC_URL + "assets/External/3.png"}
          alt="Background"
        />
      </div>
      <div className={classes.rsvpContainer}>
        <h2 className={classes.rsvpHeading}>RSVP</h2>
        <p className={classes.rsvpDate}>by Feb 1st, 2024</p>
        <a href="YOUR_RSVP_LINK_HERE" className={classes.rsvpLink}>RSVP Now</a>
      </div>
      <div className={classes.containerOurStory}>
        <div className={classes.title}>Our Story</div>
        <div className={classes.columnsContainer}>
          <div className={classes.leftColumn}>
            <p className={classes.loremText}>
            Nathaniel, from a rural town in Pennsylvania, and Fanny, from the city of Stockholm in Sweden. We started as two student at Embry-Riddle Aeronautical University in Florida, but a tinder date later, endless texts & phone calls over the Atlantic, and a summer of adventure, our story began. After five years, we decided to spend the rest of our lives together as the sun was setting on top of a volcano in the Aegen Sea. Now we want to solidify our love Infront of our family and friends as we begin this new chapter of our lives together.
            </p>
            <div className={classes.buttonContainer}>
              <Link to="/our-story">
                <button className={classes.button}>
                  More About Us
                </button>
              </Link>
            </div>
          </div>
        <div className={classes.rightColumn}>
          <img
            className={classes.columnImage}
            src={process.env.PUBLIC_URL + "assets/Wedding Images/07. 02. 2023-215.jpg"}
            alt="Right Column"
          />
        </div>
      </div>
    </div>
    <div className={classes.containerLocation}>
      <img src={process.env.PUBLIC_URL + "assets/External/1.png"} alt="Left" className={classes.leftImage} />
      <img src={process.env.PUBLIC_URL + "assets/External/2.png"} alt="Right" className={classes.rightImage} />
      <div className={classes.zIndex}>
        <h1 className={classes.headingLocation}>Location</h1>
        <p className={classes.subheadingLocation}>Stockholm, Sweden</p>
      </div>
    </div>
    <div className={classes.containerStockholm}>
      <img
        src={process.env.PUBLIC_URL + "assets/External/stockholm.png"}
        alt="Stockholm"
        className={classes.imageStockholm}
      />
    </div>
    <div className={classes.homeContainer}>
      <div className={classes.title}>The Wedding Day</div>
      <div className={classes.columnsContainerAbout}>
        <div className={classes.column}>
          <div className={classes.whereTitle}>When</div>
          <div className={classes.address}>Saturday, June 29th, 2024</div>
          <div className={classes.address}>Ceremony: 3PM</div>
          <div className={classes.address}>Reception: 5PM</div>
        </div>
        <div className={`${classes.column} ${classes.middleColumn}`}>
          <img
            className={classes.imageAbout}
            src={process.env.PUBLIC_URL + "assets/External/3.png"}
            alt="Background"
          />
        </div>
        <div className={classes.column}>
          <div className={classes.whereTitle}>Where</div>
          <div className={classes.address}>Sånga Kyrka</div>
          <div className={classes.address}>Sånga Prästgårds Väg 1, 179 96 Sånga, SWEDEN</div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <Link to="/stockholm-tips">
          <button className={classes.button}>
            Tips for things to do in Stockholm
          </button>
        </Link>
      </div>
    </div>
    <div className={classes.containerOurStory}>
      <div className={classes.title}>
        Wedding Day Itinerary
      </div>
      <div className={classes.columnsContainer}>
        <div className={classes.leftColumn}>
          <div className={classes.loremText}>
            The wedding day will begin with a cermony at Sanga Kyrka, and then a reception at Ekebyhovs Slott. Björkuddsvägen 107, 178 34 Ekerö
            <br />
            <br />
            Before the wedding day there will be optional events open to whoever wants to join. After the wedding there will be coffee and small bites at Kristiansson’s for gift opening. Make sure to fill in the RSVP if interested in joining. 
            <br />
            <br />
            <u>Optional Events Before the Wedding</u>
            <ul>
              <li>
                Walking tour and rooftop bar guide with Fanny and Nate – Monday 24th 
              </li>
              <li>
                Day Cruise in Achapelago’s – Tuesday 25th 
              </li>
              <li>
                BBQ at Kristiansson’s House – Thursday 27th
              </li>
            </ul>
            <u>Optional Events After the Wedding</u>
            <ul>
              <li>
                Gift Opening and Coffee – Sunday 30th
              </li>
            </ul>
          </div>
          <div className={classes.buttonContainer}>
            <Link to="/itinerary">
              <button className={classes.button}>
                Itinerary
              </button>
            </Link>
          </div>
        </div>
      <div className={classes.rightColumnB}>
        <div className={classes.flowerContainerB}>
          <img
            className={classes.backgroundImageB}
            src={process.env.PUBLIC_URL + "assets/External/3.png"}
            alt="Background"
          />
        </div>
        <img
          className={classes.columnImageB}
          src={process.env.PUBLIC_URL + "assets/Wedding Images/Picture1.jpg"}
          alt="Right Column"
        />
      </div>
      </div>
    </div>
    <div className={classes.containerOurStoryB}>
      <div className={classes.columnsContainer}>
        <div className={classes.leftColumnB}>
          <img
            className={classes.columnImage}
            src={process.env.PUBLIC_URL + "assets/Wedding Images/Picture2.jpg"}
            alt="Right Column"
          />
        </div>
        <div className={classes.rightColumnBB}>
          <div className={classes.title}>
            Gift - Registry
          </div>
          <p className={classes.loremText}>
            Not sure what to get us for wedding gift? We are planning a trip to New Zealand for our Honeymoon and would love your contribution to make it extra special 
          </p>
          <div className={classes.buttonContainer}>
            <Link to="/gifts">
              <button className={classes.button}>
                Registry
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.containerOurStoryE}>
      <div className={classes.columnsContainer}>
        <div className={classes.leftColumn}>
          <div className={classes.title}>
            Gift - Registry
          </div>
          <p className={classes.loremText}>
            Not sure what to get us for wedding gift? We are planning a trip to New Zealand for our Honeymoon and would love your contribution to make it extra special 
          </p>
          <div className={classes.buttonContainer}>
            <Link to="/gifts">
              <button className={classes.button}>
                Registry
              </button>
            </Link>
          </div>
        </div>
        <div className={classes.rightColumn}>
          <img
            className={classes.columnImage}
            src={process.env.PUBLIC_URL + "assets/Wedding Images/Picture2.jpg"}
            alt="Right Column"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;
