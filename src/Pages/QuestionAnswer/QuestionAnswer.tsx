import React from 'react';
import { createUseStyles } from 'react-jss';

// Example data for questions and answers
const faqData = [
  { question: 'What is the purpose of this component?', answer: 'The purpose of this component is...' },
  { question: 'How do I use the provided examples?', answer: 'You can use the examples by...' },
  // Add more questions and answers here
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
        src={process.env.PUBLIC_URL + "assets/Wedding Images/Gifts.jpg"}
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