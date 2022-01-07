import React from "react";
import { render, screen } from '@testing-library/react';
import Display from './Display';

import GetCharset from '../../utils/GetCharset';

let maxRemaining;

let started;
let setStarted = (val)=> {
	started = val;
};

let charset;
let setCharset = (val)=> {
	charset = val;
};

let remaining;
let setRemaining = (val)=> {
	remaining = val;
};

let usedQuestions;
let setUsedQuestions = (val)=> {
	usedQuestions = val;
};

let answer;
let setAnswer = (val)=> {
	answer = val;
};

let result;
let setResult = (val)=> {
	result = val;
};

let question;
let setQuestion = (val)=> {
	question = val;
};

describe("Display", () => {
	it("should render with instructions and welcome message if not started", () => {
		maxRemaining = 20;
		setCharset(null);
		setStarted(false);
		setUsedQuestions([]);
		setRemaining(maxRemaining);

	    render(
	        <Display 
	          charset={ charset }
	          started={ started }
	          remaining={ remaining }
	          maxRemaining={ maxRemaining }
	          answer={ answer }
	          question={ question }
	          usedQuestions={ usedQuestions }
	          result={ result }
	          setStarted={ setStarted }
	          setRemaining={ setRemaining }
	          setAnswer={ setAnswer }
	          setQuestion={ setQuestion }
	          setUsedQuestions={ setUsedQuestions }
	        />
        );

		expect(screen.queryByText("Welcome to J-Trainer!")).toBeInTheDocument();
	});

	it("should render results if started and no questions remaining", () => {
		maxRemaining = 20;
		setCharset(GetCharset("hiragana"));
		setStarted(true);
		setUsedQuestions([]);
		setRemaining(0);
		setResult(1);

	    render(
	        <Display 
	          charset={ charset }
	          started={ started }
	          remaining={ remaining }
	          maxRemaining={ maxRemaining }
	          answer={ answer }
	          question={ question }
	          usedQuestions={ usedQuestions }
	          result={ result }
	          setStarted={ setStarted }
	          setRemaining={ setRemaining }
	          setAnswer={ setAnswer }
	          setQuestion={ setQuestion }
	          setUsedQuestions={ setUsedQuestions }
	        />
        );

		expect(screen.queryByText("Practice more...")).toBeInTheDocument();
		expect(screen.queryByText(result + " / " + maxRemaining)).toBeInTheDocument();
	});	

	it("should render remaining if started and has questions remaining", () => {
		maxRemaining = 20;
		setCharset(GetCharset("hiragana"));
		setStarted(true);
		setUsedQuestions([]);
		setRemaining(19);
		setResult(1);
		setQuestion(0);

	    render(
	        <Display 
	          charset={ charset }
	          started={ started }
	          remaining={ remaining }
	          maxRemaining={ maxRemaining }
	          answer={ answer }
	          question={ question }
	          usedQuestions={ usedQuestions }
	          result={ result }
	          setStarted={ setStarted }
	          setRemaining={ setRemaining }
	          setAnswer={ setAnswer }
	          setQuestion={ setQuestion }
	          setUsedQuestions={ setUsedQuestions }
	        />
        );

		expect(screen.getByTestId("BtnRemaining").textContent).toBe("18 REMAINING ➤");
		expect(screen.queryByText(charset[question].char)).toBeInTheDocument();
	});	 

	it("should render answer and tick if correct", () => {
		maxRemaining = 20;
		setCharset(GetCharset("hiragana"));
		setStarted(true);
		setUsedQuestions([]);
		setRemaining(19);
		setResult(1);
		setQuestion(0);
		setAnswer(charset[0].romaji);

	    render(
	        <Display 
	          charset={ charset }
	          started={ started }
	          remaining={ remaining }
	          maxRemaining={ maxRemaining }
	          answer={ answer }
	          question={ question }
	          usedQuestions={ usedQuestions }
	          result={ result }
	          setStarted={ setStarted }
	          setRemaining={ setRemaining }
	          setAnswer={ setAnswer }
	          setQuestion={ setQuestion }
	          setUsedQuestions={ setUsedQuestions }
	        />
        );

		expect(screen.queryByText(answer)).toBeInTheDocument();
		expect(screen.queryByText("✓")).toBeInTheDocument();
	});	 

	it("should render answer and cross if incorrect", () => {
		maxRemaining = 20;
		setCharset(GetCharset("hiragana"));
		setStarted(true);
		setUsedQuestions([]);
		setRemaining(19);
		setResult(1);
		setQuestion(0);
		setAnswer(charset[1].romaji);

	    render(
	        <Display 
	          charset={ charset }
	          started={ started }
	          remaining={ remaining }
	          maxRemaining={ maxRemaining }
	          answer={ answer }
	          question={ question }
	          usedQuestions={ usedQuestions }
	          result={ result }
	          setStarted={ setStarted }
	          setRemaining={ setRemaining }
	          setAnswer={ setAnswer }
	          setQuestion={ setQuestion }
	          setUsedQuestions={ setUsedQuestions }
	        />
        );

		expect(screen.queryByText(answer)).toBeInTheDocument();
		expect(screen.queryByText("✗")).toBeInTheDocument();
	});	 

});