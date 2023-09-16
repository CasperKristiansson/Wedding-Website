import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  container: {
    position: "relative",
    maxWidth: "100%",
    height: 550,
    maxHeight: 550,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    lineHeight: "0.5",
    background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 80%)",
    padding: "20px 0",
    "@media (max-width: 460px)": {
      lineHeight: "1",
    },
  },
  heading: {
    fontSize: "55px",
    fontWeight: "bold",
    color: "#fff",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    fontFamily: "'Cinzel', serif",
  },
  subheading: {
    fontSize: "35px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    fontFamily: "'Cinzel', serif",
  },
  containerDescription: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 5% 10px 5%",
    "@media (max-width: 1099px)": {
      // Media query for less than 1100px
      flexDirection: "column", // Make the children stack vertically
    },
  },
  leftColumn: {
    flex: 1,
    marginLeft: "5%",
    "@media (max-width: 1099px)": {
      marginLeft: 0, // Remove the left margin for a cleaner look on small screens
      marginBottom: "20px", // Add some bottom margin for spacing between columns
    },
  },
  rightColumn: {
    flex: 1,
    "@media (max-width: 1099px)": {
      marginLeft: 0, // Ensure no left margin on small screens
    },
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "10px",
    fontFamily: "'Cinzel', serif",
    marginLeft: "22px",
  },
  imageDescription: {
    maxWidth: "100%",
    height: "auto",
  },
  loremText: {
    marginTop: "20px",
    fontSize: "18px",
    lineHeight: "1.5",
    marginLeft: 50,
    "@media (max-width: 1099px)": {
      marginLeft: 0, // Ensure no left margin on small screens
    },
  },
  loremTextB: {
    marginTop: "20px",
    fontSize: "18px",
    lineHeight: "1.5",
    marginLeft: 22,
  },
  numberedList: {
    listStyleType: "decimal", // Use decimal numbering for the list
    paddingLeft: "20px", // Add some left padding for the list items
  },
  listItem: {
    marginBottom: "10px",
  },
  containerTitle: {
    background: "#C1C69D",
    height: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "42px",
    fontWeight: "bold",
    zIndex: 3,
    fontFamily: "'Cinzel', serif",
    color: "white",
  },
  containerOurStoryB: {
    padding: "50px 0",
    position: "relative",
    "@media (max-width: 1199px)": {
      display: "none",
    },
  },
  columnsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    padding: "0 30px",
    "@media (max-width: 1199px)": {
      flexDirection: "column",
    },
  },
  leftColumnB: {
    flex: 1,
    marginRight: "10px",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 1199px)": {
      marginRight: 0,
      marginBottom: "20px", // Adjust this to your preference
      padding: "0px", // Adjust padding as necessary
    },
  },
  columnImage: {
    width: "700px",
    marginLeft: "auto",
    marginRight: "auto",
    zIndex: 3,
    "@media (max-width: 1199px)": {
      maxWidth: "100%", // Adjust the image size as needed
    },
  },
  rightColumnBB: {
    flex: 1,
    marginLeft: "10px",
    "@media (max-width: 1199px)": {
      marginLeft: 0,
      marginTop: "20px", // Adjust this to your preference
      textAlign: "center",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
    "@media (max-width: 1199px)": {
      marginBottom: "20px", // Adjust this to your preference
    },
  },
  button: {
    fontSize: "1.5rem",
    textDecoration: "none",
    padding: "0.8rem 2.5rem",
    border: "2px solid #333",
    borderRadius: "8px",
    color: "white",
    backgroundColor: "#B2BA99",
    borderColor: "#B2BA99",
    cursor: "pointer",
    "&:hover": {
      color: "white",
      backgroundColor: "#97AA55",
    },
  },
  containerOurStoryE: {
    padding: "50px 0",
    position: "relative",
    "@media (min-width: 1199px)": {
      display: "none",
    },
  },
});

const Gifts: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <img
          src={
            process.env.PUBLIC_URL +
            "assets/Wedding Images/Gifts.jpg"
          }
          alt="Wedding"
          className={classes.image}
        />
        <div className={classes.textContainer}>
          <h2 className={classes.heading}>Gift Registry</h2>
        </div>
      </div>
      <div className={classes.containerDescription}>
        <div className={classes.leftColumn}>
          <img
            src={
              process.env.PUBLIC_URL +
              "assets/External/Example Gift.png"
            }
            alt="How It Works"
            className={classes.imageDescription}
          />
        </div>
        <div className={classes.rightColumn}>
          <div className={classes.loremText}>
            <div className={classes.title}>How it Works</div>
            <ol className={classes.numberedList}>
              <li className={classes.listItem}>
                Select one of the available gifts from the list
                below. (Grayed out gifts are already taken)
              </li>
              <li className={classes.listItem}>
                After selecting a gift, you will get a popup
                with the gift details. Click on the "Reserve"
                button to reserve the gift.
              </li>
              <li className={classes.listItem}>
                You then have three payment options; Paypal,
                Swish or Venmo. Send an email to
                casper.kristiansson@yahoo.se with payment
                confirmation (phone number/email address and
                names sent with the payment) Keep in mind that
                the person you are sending the money to is
                either Casper Kristiansson (Fanny Kristiansson's
                brother) or ...
              </li>
              <li className={classes.listItem}>
                Once the payment is confirmed, the gift will be
                marked as reserved and you will receive a
                confirmation email. (This is a manual process,
                so it might take up to 24 hours)
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className={classes.containerTitle}>
        Reserve & pay for a Gift
      </div>
      <div className={classes.containerOurStoryB}>
        <div className={classes.columnsContainer}>
          <div className={classes.leftColumnB}>
            <img
              className={classes.columnImage}
              src={
                process.env.PUBLIC_URL +
                "assets/External/Picture4.jpg"
              }
              alt="Right Column"
            />
          </div>
          <div className={classes.rightColumnBB}>
            <div className={classes.title}>
              New Zealand Honeymoon 2025
            </div>
            <p className={classes.loremTextB}>
              Help us make our honeymoon in New Zealand extra
              special. Below are a few gifts, events, and bucket
              list items that we are dreaming about doing on our
              honeymoon. We plan to travel by RV from the top of
              the north island to the toe of the south island.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.containerOurStoryE}>
        <div className={classes.columnsContainer}>
          <div className={classes.leftColumn}>
            <div className={classes.title}>
              New Zealand Honeymoon 2025
            </div>
            <p className={classes.loremTextB}>
              Help us make our honeymoon in New Zealand extra
              special. Below are a few gifts, events, and bucket
              list items that we are dreaming about doing on our
              honeymoon. We plan to travel by RV from the top of
              the north island to the toe of the south island.
            </p>
          </div>
          <div className={classes.rightColumn}>
            <img
              className={classes.columnImage}
              src={
                process.env.PUBLIC_URL +
                "assets/External/Picture4.jpg"
              }
              alt="Right Column"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gifts;
