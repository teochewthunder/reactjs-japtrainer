import React, { useState } from 'react';
import './Display.css';

function Display(props) {

	let charset = props.charset;
    let started = props.started;
    let remaining = props.remaining;
    let answer = props.answer;
    let question = props.question;
    let result = props.result;
    let setRemaining = props.setRemaining;
    let setAnswer = props.setAnswer;
    let setQuestion = props.setQuestion;

	const BtnNext_click = (ans)=> {
		if (remaining > 0) {
			setRemaining(remaining - 1);
			setAnswer("");
			setQuestion(Math.floor(Math.random() * charset.length));
		}
	};
    
	if (started && remaining > 0) {
		return (
			<>
				<div className="Character">
					{ charset[question].char }
				</div>
				<div className={ answer === "" ? "Result Hide" : "Result"}>
					<span className={ charset[question].romaji === answer ? "Correct" : "Wrong" }>
						{ charset[question].romaji === answer ? "✓" : "✗" } 
					</span>
					{ answer }
				</div>
				<div className="Remaining">
					<button onClick={ ()=>{BtnNext_click();}} disabled={answer === ""}>
						{ remaining } remaining ➤
					</button>
				</div>
			</>	   	
		);
	} 

	if (started && remaining === 0) {
		return (
			<>
				<div className="Result">
					<span className="Correct">
						{ result } / 50
					</span>
				</div>
			</>	   	
		);
	} 

	return (
		<>
		</>	    	 
	);
}

export default Display;