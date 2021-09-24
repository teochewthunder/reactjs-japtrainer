import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

import GetCharset from './utils/GetCharset';

function App() {
  const [charset, setCharset] = useState(null);
  const [started, setStarted] = useState(false);
  const [remaining, setRemaining] = useState(20);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(null);
  const [result, setResult] = useState(0);
  const [usedQuestions, setUsedQuestions] = useState([]);
  const maxRemaining = 20;

  return (
    <div className="App">
      <div className="Top">
        <Header 
          charset={ charset }
          started={ started }
          remaining={ remaining }
          usedQuestions={ usedQuestions }
          maxRemaining={ maxRemaining }
          setStarted={ setStarted }
          setCharset={ setCharset }
          setRemaining={ setRemaining }
          setAnswer={ setAnswer }
          setResult={ setResult }
          setQuestion={ setQuestion }
          setUsedQuestions={ setUsedQuestions }
        />
      </div>
      <div className="Middle">
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
      </div>  
      <div className="Bottom">
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
      </div>       
    </div>
  );
}

export default App;
