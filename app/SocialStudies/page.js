"use client"

import { useState } from 'react';

const SocialStudies = () => {
  const quizQuestions = [
    { id: 1, question: 'Which country is known as the Land of the Rising Sun?', options: ['China', 'Japan', 'India', 'South Korea'], correctAnswer: 'Japan' },
    { id: 2, question: 'What is the capital city of France?', options: ['Berlin', 'Madrid', 'Rome', 'Paris'], correctAnswer: 'Paris' },
    { id: 3, question: 'In which year did the United States declare its independence?', options: ['1776', '1789', '1800', '1812'], correctAnswer: '1776' },
    { id: 4, question: 'Who was the first President of the United States?', options: ['Thomas Jefferson', 'John Adams', 'George Washington', 'James Madison'], correctAnswer: 'George Washington' },
    { id: 5, question: 'Which river is the longest in the world?', options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'], correctAnswer: 'Nile River' },
    { id: 6, question: 'What is the currency of Brazil?', options: ['Peso', 'Real', 'Dollar', 'Euro'], correctAnswer: 'Real' },
    { id: 7, question: 'Which ancient civilization built the pyramids?', options: ['Maya', 'Inca', 'Egyptian', 'Roman'], correctAnswer: 'Egyptian' },
    { id: 8, question: 'What is the official language of Australia?', options: ['English', 'Spanish', 'French', 'German'], correctAnswer: 'English' },
    { id: 9, question: 'In which continent is the Sahara Desert located?', options: ['Africa', 'Asia', 'South America', 'North America'], correctAnswer: 'Africa' },
    { id: 10, question: 'Who was the leader of the Indian independence movement against British rule?', options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose', 'Sardar Patel'], correctAnswer: 'Mahatma Gandhi' },
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
        <h1 style={{ fontSize: '3em', margin: '0', color: '#469BA6' }}>Social Studies Quiz</h1>
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

export default SocialStudies;
