import "./styles.css";
import { useState } from "react";
import words from "./Words";

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getNextIndex(index) {
  return index === words.length - 1 ? 0 : index + 1;
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Values />
    </div>
  );
}

function Values() {
  const [shuffledArray, setShuffledArray] = useState(words);
  const [index, setIndex] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);

  return (
    <>
      <span>
        Question {index + 1} of {shuffledArray.length}
      </span>
      <br />
      <span>Word: </span>
      <span>{shuffledArray[index].word}</span>
      <br />
      <span>Meaning: </span>
      <span style={{ visibility: answerVisible ? "visible" : "hidden" }}>
        {shuffledArray[index].meaning}
      </span>
      <br />
      <span>Pronunciation: </span>
      <span style={{ visibility: answerVisible ? "visible" : "hidden" }}>
        {shuffledArray[index].pronunciation}
      </span>
      <br />
      <span>Spelling: </span>
      <span style={{ visibility: answerVisible ? "visible" : "hidden" }}>
        {shuffledArray[index].spelling}
      </span>
      <br />
      <span>Keyboard: </span>
      <span style={{ visibility: answerVisible ? "visible" : "hidden" }}>
        {shuffledArray[index].keyboard}
      </span>
      <br />
      <br />
      <button
        onClick={function () {
          setIndex(getNextIndex(index));
          setAnswerVisible(false);
        }}
      >
        Next Word
      </button>
      &nbsp;&nbsp;
      <button onClick={() => setAnswerVisible(!answerVisible)}>
        {answerVisible ? "Hide Answers" : "Show Answers"}
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setShuffledArray(shuffleArray(words));
          setIndex(0);
        }}
      >
        Shuffle
      </button>
    </>
  );
}
