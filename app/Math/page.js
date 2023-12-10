"use client"

import { useState } from 'react';

const Math = () => {

  const quizQuestions = [
    { id: 1, question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], correctAnswer: '4' },
    { id: 2, question: 'What is 5 * 3?', options: ['10', '15', '20', '25'], correctAnswer: '15' },
    { id: 3, question: 'What is the square root of 25?', options: ['3', '4', '5', '6'], correctAnswer: '5' },
    { id: 4, question: 'What is 12 divided by 3?', options: ['2', '3', '4', '5'], correctAnswer: '4' },
    { id: 5, question: 'What is 8 minus 5?', options: ['2', '3', '4', '5'], correctAnswer: '3' },
    { id: 6, question: 'What is 3 to the power of 4?', options: ['27', '64', '81', '100'], correctAnswer: '81' },
    {
      id: 7,
      question: 'If a train travels at 60 miles per hour, how far will it travel in 2.5 hours?',
      options: ['120 miles', '150 miles', '180 miles', '200 miles'],
      correctAnswer: '150 miles',
    },
    {
      id: 8,
      question: 'Solve the equation: 2x + 5 = 15',
      options: ['5', '7', '8', '10'],
      correctAnswer: '5',
    },
    {
      id: 9,
      question: 'A bakery sold 24 apple pies and 16 cherry pies. How many pies were sold in total?',
      options: ['30', '36', '40', '48'],
      correctAnswer: '40',
    },
  ];

  // State to track user's selected answers
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(''));

  // Function to handle user's answer selection
  const handleAnswerSelection = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  // Function to calculate and display results
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
        <h1 style={{ fontSize: '3em', margin: '0', color: '#469BA6' }}>Math Quiz</h1>
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
                  // Add a border around the option on mouse over
                  document.getElementById(`option${optionIndex}`).style.borderColor = '#fff';
                }}
                onMouseOut={() => {
                  // Remove the border on mouse out
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

export default Math;
