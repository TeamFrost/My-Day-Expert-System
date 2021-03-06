import './App.css';
import kb from './data/activities.js';
import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Result from './assets/result.svg';

export default function App() {

	const forwardChainPers = assertions => {
		let results = [];

		kb.forEach(k => {
			const dataPremises = k.premises;
			let isCorrect = true;

			assertions.forEach(assertion => {
				if (dataPremises.findIndex(data => data.attribute === assertion.attribute && data.value === assertion.value) === -1) {
					isCorrect = false;
				}
			})

			if (isCorrect) {
				results.push(k.conclusion.value);
			}
		});

		return results;
	}


	let h = window.innerHeight;
	let styles = useStyles();
	const [info, setInfo] = useState(false);
	const [completed, setCompleted] = useState(false);
	const [conclusion, setConclusion] = useState("");
	const [premises, setPremises] = useState([{ attribute: 'category', value: "sport" }]);

	const isPremise = name => premises.findIndex(p => p.attribute === name) !== -1;

	const updatePremises = (attribute, value) => {
		let exists = false;

		let newPremises = premises;

		newPremises.forEach(p => {
			if (p.attribute === attribute) {
				p.value = value;
				exists = true;
			}
		})

		if (!exists) {
			newPremises = [...premises, { attribute, value }]
		}

		console.log(forwardChainPers(newPremises));
		setPremises(newPremises);
	}

	const handleInfo = () => {
		setInfo(!info);
	}
	const handleCompleted = () => {
		console.log("COMPLETED");
		console.log(premises)
		setCompleted(!completed);
		setConclusion(forwardChainPers(premises));
	}

	const handleTakeAgain = () => {
		setPremises([{ attribute: 'category', value: "sport" }]);
		setCompleted(!completed);
	}

	return (
		<div className="App">
			<div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
				<div style={{ height: h }}>
					<h2 className={styles.headerText}>MY DAY</h2>
					<p className={styles.description}>an expert system that determines when you should work out based on your preferences</p>
					<Button variant="contained" className={styles.button} onClick={handleInfo}>Info</Button>
					{info ?
						<Paper className={styles.infoPress}>
							<div className={styles.textInfoAlign}>
								<p className={styles.textInfo}><b>My Day expert system</b> was written in JavaScript, using a modified forward-chaining algorithm that analyzes 81 rules.</p>
								<p className={styles.textInfo}>We went over these different scenarios and hopefully the results satisfy your inquiry about when is the best time for a workout.</p>
								<p className={styles.textInfo}>Choose between the available options and then press the <b>"Submit"</b> button to get your result.</p>
							</div>
						</Paper> :
						null}
				</div>
				<Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: h }}>
					{completed ?
						<Paper elevation={5} className={styles.paper}>
							<img className={styles.image} src={Result} alt="result" />
							<p className={styles.textResult}>Result</p>
							<Typography variant="h6" className={styles.resultString}>{conclusion}</Typography>
							<Button variant="contained" className={styles.retakeButton} onClick={handleTakeAgain}> Take Again</Button>
						</Paper>
						:
						<Paper elevation={5} className={styles.paper}>
							<Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 1</Typography>
							<Typography variant="h5" align='left' className={styles.question}>How many times a week do you want to work out?</Typography>
							<div >
								<div className="inputGroup">
									<input onClick={() => updatePremises("occurrence", "1-2")} id="radio11" name="radio1" type="radio" />
									<label htmlFor="radio11" className="buttonText">1-2</label>
								</div>
								<div className="inputGroup">
									<input onClick={() => updatePremises("occurrence", "3-4")} id="radio12" name="radio1" type="radio" />
									<label htmlFor="radio12" className="buttonText">3-4</label>
								</div>
								<div className="inputGroup">
									<input onClick={() => updatePremises("occurrence", "5+")} id="radio13" name="radio1" type="radio" />
									<label htmlFor="radio13" className="buttonText">5+</label>
								</div>
							</div>
							{isPremise("occurrence") ?
								<div>
									<Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 2</Typography>
									<Typography variant="h5" align='left' className={styles.question}>When is the worst time for you for sport activities?</Typography>
									<div >
										<div className="inputGroup">
											<input onClick={() => updatePremises("no_time", "morning")} id="radio21" name="radio2" type="radio" />
											<label htmlFor="radio21" className="buttonText">morning</label>
										</div>
										<div className="inputGroup">
											<input onClick={() => updatePremises("no_time", "afternoon")} id="radio22" name="radio2" type="radio" />
											<label htmlFor="radio22" className="buttonText">afternoon</label>
										</div>
										<div className="inputGroup">
											<input onClick={() => updatePremises("no_time", "evening")} id="radio23" name="radio2" type="radio" />
											<label htmlFor="radio23" className="buttonText">evening</label>
										</div>
									</div>
								</div>
								: null}
							{isPremise("no_time") ?
								<div>
									<Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 3</Typography>
									<Typography variant="h5" align='left' className={styles.question}>Why do you want to work out?</Typography>
									<div >
										<div className="inputGroup">
											<input onClick={() => updatePremises("reason", "sleep better")} id="radio31" name="radio3" type="radio" />
											<label htmlFor="radio31" className="buttonText">sleep better</label>
										</div>
										<div className="inputGroup">
											<input onClick={() => updatePremises("reason", "training")} id="radio32" name="radio3" type="radio" />
											<label htmlFor="radio32" className="buttonText">training</label>
										</div>
										<div className="inputGroup">
											<input onClick={() => updatePremises("reason", "enjoy")} id="radio33" name="radio3" type="radio" />
											<label htmlFor="radio33" className="buttonText">enjoyment</label>
										</div>
									</div>
								</div>
								: null}
							{isPremise("reason") ?
								<div>
									<Typography variant="h6" align='left' className={styles.questionNumber}>QUESTION 4</Typography>
									<Typography variant="h5" align='left' className={styles.question}>How much time would want to spend?</Typography>
									<div >
										<div className="inputGroup">
											<input onClick={() => updatePremises("duration", "short")} id="radio41" name="radio4" type="radio" />
											<label htmlFor="radio41" className="buttonText">short 30 min</label>
										</div>
										<div className="inputGroup">
											<input onClick={() => updatePremises("duration", "medium")} id="radio42" name="radio4" type="radio" />
											<label htmlFor="radio42" className="buttonText">medium 1h</label>
										</div>
										<div className="inputGroup">
											<input onClick={() => updatePremises("duration", "long")} id="radio43" name="radio4" type="radio" />
											<label htmlFor="radio43" className="buttonText">long 2h</label>
										</div>
									</div>
								</div>
								: null}
							{isPremise("duration") ? handleCompleted() : null}
						</Paper>
					}
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
		marginTop: '2%'
	},
	question: {
		color: 'black',
		padding: 10,
		fontWeight: 'bold'
	},
	submitButton: {
		color: '#FFF',
		backgroundColor: "#3DA458",
		borderRadius: 20,
		fontSize: '1.5rem',
		fontWeight: 700,
		marginTop: "3%",
		width: "30%",
		'&:hover': {
			backgroundColor: "#3DA458AA",
			color: '#FFF'
		},
	},
	infoPress: {
		position: 'absolute',
		bottom: '12%',
		left: '5%',
		width: '27%',
		height: '34%',
		borderRadius: 20,
		opacity: 0.95,
		justifyContent: 'center',
	},
	textInfoAlign: {
		padding: '5%',
		paddingTop: '3%',
		paddingBottom: '3%',
		textAlign: 'left',
	},
	textInfo: {
		fontSize: '1.3rem'
	},
	image: {
		marginTop: '10%',
	},
	retakeButton: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		color: 'white',
		backgroundColor: '#7B7B7B',
		'&:hover': {
			backgroundColor: "#7B7B7BA1",
			color: '#FFF'
		},
		width: '30%',
		borderRadius: 20,
		top: '17%'
	},
	textResult: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: '2.5rem'
	},
	resultString: {
		color: 'black',
		fontSize: '2rem'
	}
});


