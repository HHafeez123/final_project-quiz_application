"use client"

import { useState } from 'react';

const GeneralKnowledge = () => {
  const quizQuestions = [
    { id: 1, question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correctAnswer: 'Paris' },
    { id: 2, question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
    { id: 3, question: 'Who wrote "Romeo and Juliet"?', options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'], correctAnswer: 'William Shakespeare' },
    { id: 4, question: 'What is the largest mammal in the world?', options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'], correctAnswer: 'Blue Whale' },
    { id: 5, question: 'Which element has the chemical symbol "O"?', options: ['Oxygen', 'Gold', 'Silver', 'Copper'], correctAnswer: 'Oxygen' },
    { id: 6, question: 'In which year did the Titanic sink?', options: ['1912', '1920', '1930', '1940'], correctAnswer: '1912' },
    { id: 7, question: 'Who painted the Mona Lisa?', options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'], correctAnswer: 'Leonardo da Vinci' },
    { id: 8, question: 'What is the currency of Japan?', options: ['Yuan', 'Euro', 'Yen', 'Dollar'], correctAnswer: 'Yen' },
    { id: 9, question: 'Which country is known as the Land of the Rising Sun?', options: ['China', 'India', 'Japan', 'South Korea'], correctAnswer: 'Japan' },
    { id: 10, question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'], correctAnswer: 'Canberra' },
  ];

  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(''));

  const handleAnswerSelection = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const calculateResults = () => {
    let correctCount = 0;
    let incorrectCount = 0;

    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    alert(`Results:\nCorrect Answers: ${correctCount}\nIncorrect Answers: ${incorrectCount}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ background: '#00bcd4', color: '#fff' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3em', margin: '0', color: '#469BA6' }}>General Knowledge Quiz</h1>
      </div>
      <div>
        {quizQuestions.map((question, questionIndex) => (
          <div key={question.id} style={{ marginBottom: '20px', borderRadius: '15px', padding: '20px', border: '2px solid #fff' }}>
            <p style={{ fontSize: '1.5em', color: '#fff' }}>{question.question}</p>
            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                style={{
                  marginBottom: '10px',
                  borderRadius: '10px',
                  padding: '10px',
                  border: '2px solid transparent',
                  transition: 'border-color 0.3s ease',
                }}
                onMouseOver={() => {
                  document.getElementById(`option${optionIndex}`).style.borderColor = '#fff';
                }}
                onMouseOut={() => {
                  document.getElementById(`option${optionIndex}`).style.borderColor = 'transparent';
                }}
              >
                <input
                  type="radio"
                  id={`option${optionIndex}`}
                  name={`question${question.id}`}
                  value={option}
                  checked={userAnswers[questionIndex] === option}
                  onChange={() => handleAnswerSelection(questionIndex, option)}
                />
                <label
                  htmlFor={`option${optionIndex}`}
                  style={{ marginLeft: '10px', fontSize: '1.2em', color: '#fff' }}
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button
          style={{ fontSize: '1.2em', padding: '10px', background: '#004d40', color: '#fff', border: 'none', borderRadius: '5px' }}
          onClick={calculateResults}
        >
          Submit Quiz
        </button>
      </div>
    </main>
  );
};

export default GeneralKnowledge;
