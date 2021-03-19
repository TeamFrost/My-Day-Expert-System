import './App.css';
import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


export default function App() {

  let h = window.innerHeight;
  let styles = useStyles();

  const [occurance, setOccurance] = useState("");
  const [noTime, setNoTime] = useState("");
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState("");

  console.log(occurance)

  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div style={{ height: h }}>
          <h2 className={styles.headerText}>MY DAY</h2>
          <p className={styles.description}>an expert system that determines when you should work out based on your preferences</p>
          <Button variant="contained" className={styles.button}>Info</Button>
        </div>
        <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: h }}>
          <Paper elevation={5} className={styles.paper}>
            <Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 1</Typography>
            <Typography variant="h5" align='left' className={styles.question}>How many times a week do you want to work out?</Typography>
            <div >
              <div className="inputGroup">
                <input onClick={() => setOccurance("1-2")} id="radio11" name="radio1" type="radio" />
                <label htmlFor="radio11" className="buttonText">1-2</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setOccurance("3-4")} id="radio12" name="radio1" type="radio" />
                <label htmlFor="radio12" className="buttonText">3-4</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setOccurance("5+")} id="radio13" name="radio1" type="radio" />
                <label htmlFor="radio13" className="buttonText">5+</label>
              </div>
            </div>
            <Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 2</Typography>
            <Typography variant="h5" align='left' className={styles.question}>When is the worst time for you for sport activities?</Typography>
            <div >
              <div className="inputGroup">
                <input onClick={() => setNoTime("morning")} id="radio21" name="radio2" type="radio" />
                <label htmlFor="radio21" className="buttonText">morning</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setNoTime("afternoon")} id="radio22" name="radio2" type="radio" />
                <label htmlFor="radio22" className="buttonText">afternoon</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setNoTime("evening")} id="radio23" name="radio2" type="radio" />
                <label htmlFor="radio23" className="buttonText">evening</label>
              </div>
            </div>
            <Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 3</Typography>
            <Typography variant="h5" align='left' className={styles.question}>Why do you want to work out?</Typography>
            <div >
              <div className="inputGroup">
                <input onClick={() => setReason("sleep better")} id="radio31" name="radio3" type="radio" />
                <label htmlFor="radio31" className="buttonText">sleep better</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setReason("training")} id="radio32" name="radio3" type="radio" />
                <label htmlFor="radio32" className="buttonText">training</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setReason("enjoyment")} id="radio33" name="radio3" type="radio" />
                <label htmlFor="radio33" className="buttonText">enjoyment</label>
              </div>
            </div>
            <Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 4</Typography>
            <Typography variant="h5" align='left' className={styles.question}>How much time would want to spend?</Typography>
            <div >
              <div className="inputGroup">
                <input onClick={() => setOccurance("short")} id="radio41" name="radio4" type="radio" />
                <label htmlFor="radio41" className="buttonText">short 30 min</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setOccurance("medium")} id="radio42" name="radio4" type="radio" />
                <label htmlFor="radio42" className="buttonText">medium 1h</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setOccurance("long")} id="radio43" name="radio4" type="radio" />
                <label htmlFor="radio43" className="buttonText">long 2h</label>
              </div>
            </div>
            <Button variant="contained" disableFocusRipple className={styles.submitButton}>Submit</Button>
          </Paper>
        </Container>
      </div>
    </div>
  );
}


const useStyles = makeStyles({
  headerText: {
    textAlign: 'left',
    width: '60%',
    paddingLeft: "10%",
    color: 'white',
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBlockEnd: 5,
  },
  description: {
    textAlign: 'left',
    width: '60%',
    paddingLeft: "10%",
    color: 'white',
    fontSize: '2rem',
    marginBlockStart: 5,
  },
  button: {
    position: 'absolute',
    left: '5%',
    bottom: '5%',
    width: '9%',
    color: '#000',
    borderRadius: 20,
    fontSize: '1.5rem',
    fontWeight: 700,
  },
  paper: {
    height: '90%',
    width: '90%',
    color: 'white',
    borderRadius: 30,
    opacity: 0.95,
    padding: 20
  },
  buttonSelect: {
    width: 180,
    height: 50,
    backgroundColor: 'grey',
    color: 'white',
    margin: 15,
    borderRadius: 15,
  },
  questionNumber: {
    color: 'black',
    padding: 10,
    marginTop: '3%'
  },
  question: {
    color: 'black',
    padding: 10,
    fontWeight: 'bold'
  },
  submitButton: {
    color: '#FFF',
    backgroundColor: "#7acc8c",
    borderRadius: 20,
    fontSize: '1.5rem',
    fontWeight: 700,
    marginTop: "5%",
    width: "30%",
    '&:hover': {
      backgroundColor: "#7acc8c",
      color: '#FFF'
    }
  }
});


