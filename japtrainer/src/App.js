import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

import GetCharset from './utils/GetCharset';

function App() {
  const [charset, setCharset] = useState(null);
  const [started, setStarted] = useState(false);
  const [remaining, setRemaining] = useState(5);
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <div className="App">
      <div className="Top">
        <Header 
          charset={ charset }
          started={ started }
          remaining={ remaining }
          setStarted={ setStarted }
          setCharset={ setCharset }
          setRemaining={ setRemaining }
          setResult={ setResult }
        />
      </div>
      <div className="Middle">
        <Display 
          charset={ charset }
          started={ started }
          remaining={ remaining }
          answer={ answer }
          question={ question }
          result={ result }
          setStarted={ setStarted }
          setRemaining={ setRemaining }
          setAnswer={ setAnswer }
          setQuestion={ setQuestion }
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
