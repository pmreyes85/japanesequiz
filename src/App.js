import "./styles.css";
import { useState } from "react";
import lists from "./data";
import lists2 from "./data2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Stack } from "react-bootstrap";
import { useCallback, useEffect } from 'react';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getNextListIndex(index) {
  return index === lists.length - 1 ? 0 : index + 1;
}

function getPrevWordIndex(index) {
  return index <= 0 ? 0 : index - 1;
}

function getNextWordIndex(index, listIndex) {
  return index === lists[listIndex].length - 1 ? 0 : index + 1;
}

function getListLabel(index) {
  if(index === 0) {
    return "Hiragana";
  } else if(index === 1) {
    return "Hiragana Words";
  } else if(index === 2) {
    return "Katakana";
  } else if(index === 3) {
    return "Katakana Words";
  } else if(index === 4) {
    return "Kanji";
  } else if(index === 5) {
    return "Sentences";
  } else {
    return "ERROR";
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>My Japanese Quiz</h1>
      <h2>What is the English for the Japanese word shown?</h2>
      <Values />
      <br/>
      <p>
        Commands:
        <ul>
          <li>Left Arrow: Previous word</li>
          <li>Right Arrow: Next word</li>
          <li>Shift: Show/Hide answers</li>
        </ul>
      </p>
    </div>
  );
}

function Values() {
  const [listIndex, setListIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [shuffledArray, setShuffledArray] = useState(lists[listIndex]);
  const [currentLength, setCurrentLength] = useState(shuffledArray.length);
  const [currentWord, setCurrentWord] = useState(shuffledArray[wordIndex]);
  const [answerVisible, setAnswerVisible] = useState(false);

  function showPrevWord() {
    var i = getPrevWordIndex(wordIndex,listIndex);
    setWordIndex(i);
    setCurrentWord(shuffledArray[i]);
    setAnswerVisible(false);
  }
  function showNextWord() {
    var i = getNextWordIndex(wordIndex,listIndex);
    setWordIndex(i);
    setCurrentWord(shuffledArray[i]);
    setAnswerVisible(false);
  }

  // handle what happens on key press
  const handleKeyPress = useCallback((event) => {
    event.preventDefault();
    if(event.key === 'ArrowRight') {
      showNextWord();
    }
    if(event.key === 'ArrowLeft') { 
      showPrevWord();
    }
    if(event.shiftKey) {
      setAnswerVisible(!answerVisible);
    }
  }, [wordIndex,answerVisible]);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Form className="mx-auto w-50">
      <h2>{getListLabel(listIndex)}</h2>
      <Form.Label>
        Question {wordIndex + 1} of {currentLength}
      </Form.Label>
      <Row>
        <p className="h1">{currentWord.word}</p>
      </Row>
      <Form.Group as={Row}>
        <Form.Label column>Meaning</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {currentWord.meaning}
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column>Pronunciation</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {currentWord.pronunciation}
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column>Spelling</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {currentWord.spelling}
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column>Keyboard</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {currentWord.keyboard}
        </Form.Label>
      </Form.Group>
      <Stack direction="horizontal" gap={2}>
      <Button
          onClick={() => showPrevWord()}
        >
          Previous
        </Button>
        <Button
          onClick={() => showNextWord()}
        >
          Next
        </Button>
        <Button
          variant="secondary"
          onClick={() => setAnswerVisible(!answerVisible)}
        >
          {answerVisible ? "Hide Answers" : "Show Answers"}
        </Button>
        <Button
          variant="info"
          onClick={() => {
            var arr = shuffleArray(lists[listIndex]);
            setShuffledArray(arr);
            setWordIndex(0);
            setCurrentWord(arr[0]);
          }}
        >
          Shuffle
        </Button>
        <Button
          variant="info"
          onClick={() => {
            var i = getNextListIndex(listIndex);
            setListIndex(i);
            var arr = shuffleArray(lists[i]);
            setShuffledArray(arr);
            setWordIndex(0);
            setCurrentWord(arr[0]);
            setCurrentLength(arr.length);
          }}
        >
          Change List
        </Button>
      </Stack>
    </Form>
  );
}