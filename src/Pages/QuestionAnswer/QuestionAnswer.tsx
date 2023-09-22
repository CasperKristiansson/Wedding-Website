import React from 'react';
import { createUseStyles } from 'react-jss';

const faqData = [
  { question: 'When is the wedding?', answer: 'Ceremony and reception is on Saturday June 29th starting at 3pm' },
  { question: 'Where is the wedding?', answer: 'The ceremony is at Sanga Kyrka: SÅNGA PRÄSTGÅRDS VÄG 1, 179 96 SÅNGA, SWEDEN' },
  { question: "Do I need a passport to enter Sweden?", answer: "Yes. you need a passport to enter Sweden"},
  { question: "Do I need a VISA to enter Sweden?", answer: "Yes, U.S. citizens will soon need to register with the European Travel and Information System, ETIAS, to enter Sweden. ETIAS will be operational from 2024. The ETIAS requirements for Americans traveling to Sweden are explained this page: ETIAS for Sweden for US Citizens | ETIASEU.com"},
  { question: "What is the dress code?", answer: 'The dresscode is black tie optional. Black-tie optional means that you have the option of wearing your most formal attire (think: an evening gown or tuxedo) but can also choose to wear a formal suit or cocktail dress instead. Basically, you have some flexibility to play with your fit. You can either go full-on glam in black-tie-worthy attire or opt for a slightly more relaxed but still formal ensemble. Men: Suit or tuxedo (no white or green suit, but a white dress shirt is fine). Women: evening gown or cocktail dress (no green or white dress)'},
  { question: "When should I RSVP?", answer: "RSVPs are due by February 1st. You will make on RSVP on the website for each person that is attending. Only invited guests are included in the RSVP form"},
  { question: "If I’m coming from the USA, when should I plan to arrive in Sweden?", answer: "We would recommend that you book your flights Saturday June 22nd to Monday July 1st.  Taking a departure flight on (Saturday) July 22nd , you would land in Stockholm on Sunday and have a full week before the wedding. You could return on Sunday July 30th (and arrive on the same day, Sunday in the USA) and only be gone for 1 work week. But leaving a Sunday, the day after the weeding could be tough. We would recommend you depart on  Monday July 1st  at the earliest, but that is up to you!. You can plan your trip however you like. There are some great things to see and do in Stockholm."},
  { question: "Can I bring a +1 to the wedding", answer: "The wedding invite is limited to the person listed on the invite. If you are allowed ot bring a +1 it would have stated so on the invitation. The nline RSVP form will also have your +1 listed as: first name last name (+1). If you do not see your name and “(+1)” we are not anticipating you having one. The wedding venue is limited to a certain amount of people and we cannot allow everyone to have a +1. Reach out to Fanny or Nathaniel if you have any questions"},
  { question: "What is the easiest way to get to and from your wedding venue(s)?", answer: "There will be a bus provided from central Stockholm to take you to the ceremony, from the ceremony to the reception, and from the reception back to central Stockholm. If you would like to be part of the wedding bus, indicate that in the RSVP. There are also local bus stops near the venue and taxi services."},
  { question: "Is there parking available near the wedding", answer: "There are parking available at the church and the reception area. You can leave your car there overnight and pick it up the day after if you want to."},
  { question: "Where should I stay in Stockholm", answer: "For the people coming form America, we have made reservations at Hotel Continental in Central Stockholm for a cheaper rate. If you are interested, please let us know in the the RSVP."},
  { question: "What type of food will be served at your wedding?", answer: "When you make the RSVP please indicate your dinner preference and if you have nay dietary restrictions. There will be a three course dinner at the reception and the type of food you choose during the RSVP will be what you are served during wedding."},
  { question: "Will there be an open bar?", answer: "Yes! There will be basic cocktails, beer, wine, and apertifs in the evening"},
  { question: "What should we get you for wedding gift?", answer: "We have a registry for ideas if you don’t know what to get us. We love experiences and planning to travel to New Zealand for our honeymoon. We would love your contribution to make the trip extra special. See the Registry tab at the top! Coordinate gifts with Casper Kristiansson and he can help you. Trying to keep it a secret for Fanny and Nathaniel"},
  { question: "Will there be other events to attend on the wedding weekend?", answer: "We are planning some fun, optional, events during the week leading up to the wedding. Optional Events before wedding: Walking tour and rooftop bar guide with Fanny and Nate – Monday 24th,  Day Cruise in Achapelago’s – Tuesday 25th, BBQ at Kristiansson’s House – Thursday 27th. Optional Event after the wedding: Gift Opening and coffee – Sunday 30th."},
  { question: "I have more questions about your wedding, who can I contact?", answer: "Reach out to Fanny (407-488-7971), Nathaniel (814-571-7471) or Casper (+46(0)761031892)"},
];

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
  faqContainer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    marginTop: '50px',
  },
  questionContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    cursor: 'pointer',
  },
  questionNumber: {
    marginRight: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: '18px',
    fontWeight: 'bold',
    flex: 1,
  },
  answer: {
    fontSize: '16px',
    marginBottom: '15px',
  },
  line: {
    borderBottom: '1px solid #ccc',
    margin: '15px 0',
  },
});

const FAQ: React.FC<{}> = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.container}>
      <img
        src={process.env.PUBLIC_URL + "assets/Wedding Images/07. 02. 2023-24-2.jpg"}
        alt="Wedding"
        className={classes.image}
      />
      <div className={classes.textContainer}>
        <h2 className={classes.heading}>Questions & Answers</h2>
      </div>
    </div>
    <div className={classes.faqContainer}>
      {faqData.map((faq, index) => (
        <div key={index}>
          <div
            className={classes.questionContainer}
          >
            <div className={classes.questionNumber}>{index + 1}.</div>
            <div className={classes.questionText}>{faq.question}</div>
          </div>
          <div className={classes.answer}>{faq.answer}</div>
          <div className={classes.line}></div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FAQ;