import React, { useState } from 'react';
import './Header.css';

import GetCharset from '../../utils/GetCharset';

function Header(props) {
	let charset = props.charset;
	let setCharset = props.setCharset;
	let started = props.started;
	let remaining = props.remaining;
	let maxRemaining = props.maxRemaining;
	let usedQuestions = props.usedQuestions;
	let setStarted = props.setStarted;
	let setRemaining = props.setRemaining;
	let setAnswer = props.setAnswer;
	let setResult = props.setResult;
	let setUsedQuestions = props.setUsedQuestions;
	let setQuestion = props.setQuestion;

	const BtnStart_click = ()=> {
		setStarted(true);
		setRemaining(maxRemaining);
		setResult(0);
		setUsedQuestions([]);
		setQuestion(null);
	};

	const BtnEnd_click = ()=> {
		setStarted(false);
		setCharset(null);
		setAnswer("");
		setResult(0);
		setUsedQuestions([]);
		setQuestion(null);
	};

	const SetCurrentCharset = (name)=> {
		setCharset(GetCharset(name));
	}
    
	if (started) {
		return (
			<>
				<div className="Title">
					<h1>J-Trainer</h1>
				</div>
				<div className="Controls">
					<div>
						<br />
						<button onClick={ ()=>{BtnEnd_click();}}>
							{ remaining === 0 ? "RESTART ➤ " : "CANCEL ☓" }
						</button>
					</div>
				</div>
			</>	    	
		);
	} else {
		return (
			<>
				<div className="Title">
					<h1>J-Trainer</h1>
				</div>
				<div className="Controls">
					<div>
				        <input type="radio" name="charset" onClick={()=>{SetCurrentCharset('hiragana');}}  /> Hiragana <br />
				        <input type="radio" name="charset" onClick={()=>{SetCurrentCharset('katakana');}} /> Katakana <br />
				        <br />
						<button onClick={ ()=>{BtnStart_click();}} disabled={ charset === null ? true : false }>
							BEGIN ➤ 
						</button>
					</div>
				</div>
			</>
    	);  		
	}   
}

export default Header;