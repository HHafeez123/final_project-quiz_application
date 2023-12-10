"use client"

import { useState } from 'react';

const Science = () => {
  const quizQuestions = [
    { id: 1, question: 'Which gas is most abundant in the Earth\'s atmosphere?', options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'], correctAnswer: 'Nitrogen' },
    { id: 2, question: 'Which planet is known as the Red Planet?', options: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correctAnswer: 'Mars' },
    { id: 3, question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Endoplasmic reticulum', 'Ribosome'], correctAnswer: 'Mitochondria' },
    { id: 4, question: 'What is the chemical symbol for water?', options: ['H2O', 'CO2', 'O2', 'NaCl'], correctAnswer: 'H2O' },
    { id: 5, question: 'Which gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correctAnswer: 'Carbon dioxide' },
    { id: 6, question: 'What is the smallest planet in our solar system?', options: ['Mercury', 'Venus', 'Mars', 'Pluto'], correctAnswer: 'Mercury' },
    { id: 7, question: 'What is the speed of light?', options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'], correctAnswer: '300,000 km/s' },
    { id: 8, question: 'What is the chemical symbol for gold?', options: ['Au', 'Ag', 'Fe', 'Cu'], correctAnswer: 'Au' },
    { id: 9, question: 'Which gas makes up the majority of the Earth\'s atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'], correctAnswer: 'Nitrogen' },
    { id: 10, question: 'Which element has the chemical symbol "Fe"?', options: ['Iron', 'Gold', 'Silver', 'Copper'], correctAnswer: 'Iron' }  
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
        <h1 style={{ fontSize: '3em', margin: '0', color: '#469BA6' }}>Science Quiz</h1>
      </div>
      <div>
        {/* Display quiz questions and options */}
        {quizQuestions.map((question, questionIndex) => (
          <div key={question.id} style={{ marginBottom: '20px', borderRadius: '15px', padding: '20px', border: '2px solid #fff' }}>
            <p style={{ fontSize: '1.5em', color: '#fff' }}>{question.question}</p>
            {/* Map through options and generate radio buttons */}
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
        {/* Add a submit button to calculate and display results */}
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

export default Science;
