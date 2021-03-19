import './App.css';
import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



export default function App() {

  const [occurance, setOccurance] = useState("1");
  let h = window.innerHeight;
  let styles = useStyles();
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
            <Typography variant="h6" align='left' style={{ color: 'black', padding: 10 }}>QUESTION 1</Typography>
            <Typography variant="h5" align='left' style={{ color: 'black', padding: 10, fontWeight: 'bold' }}>How many times a week do you want to work out?</Typography>
            <div >
              <div className="inputGroup">
                <input onClick={() => setOccurance("1-2")} id="radio1" name="radio" type="radio" />
                <label htmlFor="radio1" className="buttonText">1-2</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setOccurance("3-4")} id="radio2" name="radio" type="radio" />
                <label htmlFor="radio2" className="buttonText">3-4</label>
              </div>
              <div className="inputGroup">
                <input onClick={() => setOccurance("5+")} id="radio3" name="radio" type="radio" />
                <label htmlFor="radio3" className="buttonText">5+</label>
              </div>
            </div>
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
  }
});


