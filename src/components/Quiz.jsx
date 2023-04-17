import React, { useState, useEffect } from 'react'

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris'
  },
  {
    id: 2,
    question: 'What is the highest mountain in the world?',
    options: ['Mount Everest', 'Mount Kilimanjaro', 'Mount McKinley', 'Mount Everest Base Camp'],
    answer: 'Mount Everest'
  },
  {
    id: 3,
    question: 'Who is the author of "The Great Gatsby"?',
    options: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'William Faulkner', 'J.D. Salinger'],
    answer: 'F. Scott Fitzgerald'
  },
];

export default function Quiz() {
  const [data, setData] = useState(questions);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (questionIndex === data.length) {
      setQuizCompleted(true);
    }
  }, [questionIndex]);

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === data[questionIndex].answer) {
      setScore(score + 1);
    }

    if (questionIndex == data.length - 1) {
      setQuestionIndex(questionIndex)
      setQuizCompleted(true);
    } else {
      setQuestionIndex(questionIndex + 1);
      selectedAnswer('');
    }
  }
  console.log('score', score)

  return (
    <div>
      {!quizCompleted ? (
        <>
          <h2>{data[questionIndex]?.question}</h2>
          <ul>
            {data[questionIndex]?.options.map((option) => (
              <li key={option} style={{ listStyle: 'none' }} >
                <input
                  type="radio"
                  value={option}
                  name="option"
                  onChange={() => handleAnswerSelection(option)}
                />
                {option}
              </li>
            ))}
          </ul>
          <button onClick={() => handleNextQuestion()}>{questionIndex === data.length - 1 ? 'Finish' : 'Next'}</button>
        </>
      ) : (
        <p>{`You scored ${score} out of ${data.length}`}</p>
      )}
    </div>

  )
}
