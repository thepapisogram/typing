import {useState} from 'react';

import Time from './Time';

import "./app.css";

export default function App() {

  const allWords = [
    'antelope',
    'horse',
    'tiger',
    'lion',
    'moose',
    'wolf',
    'walrus',
    'whale',
    'elephant',
    'spider',
    'giraffe',
    'zebra',
    'baboon',
    'monkey',
    'fish'
  ];
  const selectWord = () => {
    let rand = allWords[Math.floor(Math.random() * allWords.length)];
    return rand;
  }

  const [gameOver, setGameOver] = useState('');
  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(5);
  const [typing, setTyping] = useState('');
  const [word, setWord] = useState(selectWord);
  const [onNewWord, setOnNewWord] = useState(false);
  const [wordsTyped, setWordsTyped] = useState(0);

  const handleTyping = (event) => {
    setTyping(event.target.value);
    setPlaying(true);
    setOnNewWord(false);
    if (event.target.value === word) {
      setPlaying(true);
      setSeconds(5);
      setOnNewWord(true);
      setWord(selectWord);
      setTyping('');
      setWordsTyped(oldNo => oldNo + 1);
    }
    if(event.target.value === word && gameOver === 'Game Over' && onNewWord === false){
      setWordsTyped(1);
      setGameOver('');
      setSeconds(5);
      setPlaying(true);
      setOnNewWord(false);
    }else{
      setPlaying(true);
    }
  }

  return(
    <div className="col-10 col-md-4 col-lg-3 p-3 bg-white rounded shadow-sm" id="game">
      <div className="row row-cols-2">
        <Time setWordsTyped={setWordsTyped} playing={playing} setPlaying={setPlaying} seconds={seconds} setSeconds={setSeconds} gameOver={gameOver} setGameOver={setGameOver} onNewWord={onNewWord} setOnNewWord={setOnNewWord} />
        <div className="col text-end">
          <small><span id="typed_words">{wordsTyped}</span> words typed</small>
        </div>
      </div>
      <div className="input-group">
        <h1 className="d-block w-100 text-center text-info fw-bold" id="word">{word}</h1>
        <h2 className="d-block w-100 text-center">{gameOver}</h2>

        <input type="text" value={typing} onChange={handleTyping} id="input" className="form-control mt-2" placeholder="Start typing..." />

        <small className="d-block w-100 text-center text-muted mt-3">Developed by Anthony Saah</small>
      </div>
    </div>
  )
}