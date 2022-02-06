import "./styles.css";
import { useState } from "react";
import words from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, Button, Stack, Container } from "react-bootstrap";

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
    <Form className="mx-auto w-50">
      <Form.Label>
        Question {index + 1} of {shuffledArray.length}
      </Form.Label>
      <Form.Group as={Row}>
        <Form.Label column>Word</Form.Label>
        <Form.Label column>{shuffledArray[index].word}</Form.Label>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column>Meaning</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {shuffledArray[index].meaning}
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column>Pronunciation</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {shuffledArray[index].pronunciation}
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label column>Spelling</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {shuffledArray[index].spelling}
        </Form.Label>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column>Keyboard</Form.Label>
        <Form.Label column className={answerVisible ? "visible" : "invisible"}>
          {shuffledArray[index].keyboard}
        </Form.Label>
      </Form.Group>
      <Stack direction="horizontal" gap={2}>
        <Button
          onClick={function () {
            setIndex(getNextIndex(index));
            setAnswerVisible(false);
          }}
        >
          Next Word
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
            setShuffledArray(shuffleArray(words));
            setIndex(0);
          }}
        >
          Shuffle
        </Button>
      </Stack>
    </Form>
  );
}
