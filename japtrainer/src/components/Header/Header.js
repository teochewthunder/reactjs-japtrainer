import React, { useState } from 'react';
import './Header.css';

import GetCharset from '../../utils/GetCharset';

function Header(props) {
	let charset = props.charset;
	let setCharset = props.setCharset;
	let started = props.started;
	let remaining = props.remaining;
	let setStarted = props.setStarted;
	let setRemaining = props.setRemaining;
	let setResult = props.setResult;

	const BtnStart_click = ()=> {
		setStarted(true);
		setRemaining(5);
		setResult(0);
	};

	const BtnEnd_click = ()=> {
		setStarted(false);
	};

	const SetCurrentCharset = (name)=> {
		setCharset(GetCharset(name));
	}
    
	if (started) {
		return (
			<>
				<div className="Title">

				</div>
				<div className="Controls">
					<div>
						<button onClick={ ()=>{BtnEnd_click();}}>
							{ remaining === 0 ? "もう一度繰 ➤ " : "やめましょう ☓" }
						</button>
					</div>
				</div>
			</>	    	
		);
	} else {
		return (
			<>
				<div className="Title">

				</div>
				<div className="Controls">
					<div>
				        <input type="radio" name="charset" onClick={()=>{SetCurrentCharset('hiragana');}} selected={ charset === GetCharset('hiragana') } /> Hiragana <br />
				        <input type="radio" name="charset" onClick={()=>{SetCurrentCharset('katakana');}} selected={ charset === GetCharset('katakana') } /> Katakana <br />
						<button onClick={ ()=>{BtnStart_click();}} disabled={ charset === null ? true : false }>
							始めましょう ➤ 
						</button>
					</div>
				</div>
			</>
    	);  		
	}   
}

export default Header;