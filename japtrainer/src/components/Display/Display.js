import './Display.css';

function Display(props) {

	let charset = props.charset;
    let started = props.started;
    let remaining = props.remaining;
    let maxRemaining = props.maxRemaining;
    let answer = props.answer;
    let question = props.question;
    let result = props.result;
    let usedQuestions = props.usedQuestions;
    let setRemaining = props.setRemaining;
    let setAnswer = props.setAnswer;
    let setQuestion = props.setQuestion;
    let setUsedQuestions = props.setUsedQuestions;

	const BtnNext_click = (ans)=> {
		if (remaining > 0) {
			setRemaining(remaining - 1);
		}

		setAnswer("");
		ManageQuestionList();
	};

	const ManageQuestionList = ()=> {
		var index = Math.floor(Math.random() * charset.length);

		while (usedQuestions.indexOf(index) !== -1) {
			index = Math.floor(Math.random() * charset.length);
		}

		setQuestion(index);
		let questionList = usedQuestions;
		questionList.push(index);
		setUsedQuestions(questionList);
	}

    if (question === null && charset !== null) {
	    ManageQuestionList();
    }
    
	if (started && remaining > 0 && charset[question] !== undefined) {
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
						{ remaining - 1 } REMAINING ➤
					</button>
				</div>
			</>	   	
		);
	} 

	if (started && remaining === 0) {
		return (
			<>
				<div className="Result">
					<h1 className={ (result / maxRemaining * 100) > 50 ? "Correct" : "Wrong" }>
						{ result } / { maxRemaining }
					</h1>
					<h3 className={ (result / maxRemaining * 100) > 50 ? "Correct" : "Wrong" }>
						{ (result / maxRemaining * 100) == 100 ? "よかった! Perfect score!" : ((result / maxRemaining * 100) < 50 ? "Practice more..." : "すごいですね!") }
					</h3>
				</div>
			</>	   	
		);
	} 

	return (
		<>
			<br />
			<h3>Welcome to J-Trainer!</h3>
			<ol>
				<li>Select your character set.</li>
				<li>Click <button className="btnSmall">BEGIN ➤ </button> to start.</li>
				<li>For every character that is displayed, select the correct pronounciation. Note that some characters may have the same pronounciation as others.</li>
				<li>Click the <button className="btnSmall">REMAINING ➤ </button> button to continue after the results are displayed.</li>
			</ol>
		</>	    	 
	);
}

export default Display;