import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Keyboard from './Keyboard';

import GetCharset from '../../utils/GetCharset';

let result;
let setResult = (val)=> {
	result = val;
};

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

let question;
let setQuestion = (val)=> {
	question = val;
};

describe("Keyboard", () => {
	it("should render keys if started and there are remaining questions", () => {
		setRemaining(1);
		setStarted(true);
		setCharset(GetCharset("hiragana"));

	    	render(
	        <Keyboard 
	          charset={ charset }
	          remaining={ remaining }
	          started={ started }
	          answer={ answer }
	          question={ question }
	          result={ result }
	          setAnswer={ setAnswer }
	          setResult={ setResult }
	        />
        );

		expect(screen.getByTestId("btnAnswer_shi")).toBeInTheDocument();
		expect(screen.getByTestId("btnAnswer_yu")).toBeInTheDocument();
	});

	it("should not render keys if not started", () => {
		setRemaining(0);
		setStarted(false);
		setCharset(GetCharset("hiragana"));

	    	render(
	        <Keyboard 
	          charset={ charset }
	          remaining={ remaining }
	          started={ started }
	          answer={ answer }
	          question={ question }
	          result={ result }
	          setAnswer={ setAnswer }
	          setResult={ setResult }
	        />
        	);

		expect(screen.queryByText("shi")).toBe(null);
		expect(screen.queryByText("yu")).toBe(null);
	});

	it("should not render keys if started and there are no remaining questions", () => {
		setRemaining(0);
		setStarted(true);
		setCharset(GetCharset("hiragana"));

	    	render(
	        <Keyboard 
	          charset={ charset }
	          remaining={ remaining }
	          started={ started }
	          answer={ answer }
	          question={ question }
	          result={ result }
	          setAnswer={ setAnswer }
	          setResult={ setResult }
	        />
        	);

		expect(screen.queryByText("shi")).toBe(null);
		expect(screen.queryByText("yu")).toBe(null);
	});	

	it("should set result + 1 if key pressed correctly", () => {
		setRemaining(1);
		setStarted(true);
		setCharset(GetCharset("hiragana"));
		setQuestion(0);
		setResult(5);

	    	render(
	        <Keyboard 
	          charset={ charset }
	          remaining={ remaining }
	          started={ started }
	          answer={ answer }
	          question={ question }
	          result={ result }
	          setAnswer={ setAnswer }
	          setResult={ setResult }
	        />
        	);

		userEvent.click(screen.getByTestId("btnAnswer_a"));
		expect(answer).toBe("a");
		expect(result).toBe(6);
	});	

	it("should set result + 0 if key pressed incorrectly", () => {
		setRemaining(1);
		setStarted(true);
		setCharset(GetCharset("hiragana"));
		setQuestion(0);
		setResult(10);

	    	render(
	        <Keyboard 
	          charset={ charset }
	          remaining={ remaining }
	          started={ started }
	          answer={ answer }
	          question={ question }
	          result={ result }
	          setAnswer={ setAnswer }
	          setResult={ setResult }
	        />
        	);

		userEvent.click(screen.getByTestId("btnAnswer_ka"));
		expect(answer).toBe("ka");
		expect(result).toBe(10);
	});
});
