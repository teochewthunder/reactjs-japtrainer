import React, { useState } from 'react';
import './Keyboard.css';

import GetKeys from '../../utils/GetKeys';

function Keyboard(props) {
	let charset = props.charset;
    let started = props.started;
    let answer = props.answer;
    let question = props.question;
    let remaining = props.remaining;
    let result = props.result;
	let setAnswer = props.setAnswer;
	let setResult = props.setResult;

	const BtnAnswer_click = (ans)=> {
		if (ans !== "") {
			setAnswer(ans);

			if (ans == charset[question].romaji) {
				setResult(result + 1)
			}
		}
	};

	const keyItems = GetKeys();

	const answers = keyItems.map((item, index) => (
		<div 
			key={'romaji_' + index} 
			className={item === '' ? 'Answer Hide' : ( answer === '' ? 'Answer' : 'Answer Greyed')}
			onClick={()=>{BtnAnswer_click(item);}}
			data-testid={'btnAnswer_' + item} 
		>
	  		{item}					
		</div>
		)
	);
    
	if (started && remaining > 0) {
		return (
			<>
				{ answers }
			</>	    	
		);
	} else {
		return (
			<>
			</>	    	 
		);
	} 
}

export default Keyboard;