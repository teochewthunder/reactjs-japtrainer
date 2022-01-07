import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Keyboard from './Keyboard';

import GetCharset from '../../utils/GetCharset';

let remaining;
let started;
let charset;
let question;

let answer;
let setAnswer = (val)=> {
	answer = val;
};

let result;
let setResult = (val)=> {
	result = val;
};

describe("Keyboard", () => {
	it("should render keys if started and there are remaining questions", () => {
		remaining = 20;
		started = true;
		charset = GetCharset("hiragana"); 

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
});

describe("Keyboard", () => {
	it("should not render keys if not started", () => {
		remaining = 20;
		started = false;
		charset = GetCharset("hiragana"); 

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
});

describe("Keyboard", () => {
	it("should not render keys if started and there are no remaining questions", () => {
		remaining = 0;
		started = true;
		charset = GetCharset("hiragana"); 

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
});

describe("Keyboard", () => {
	it("should set result + 1 if key pressed correctly", () => {
		remaining = 20;
		started = true;
		charset = GetCharset("hiragana"); 
		question = 0;
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
});

describe("Keyboard", () => {
	it("should set result + 0 if key pressed incorrectly", () => {
		remaining = 20;
		started = true;
		charset = GetCharset("hiragana"); 
		question = 0;
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