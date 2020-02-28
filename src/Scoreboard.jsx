import React from 'react';

export default function Scoreboard(props) {
  const { numCorrect, numQuestions } = props;
  return (
    <p className="text">
      Your Score: {numCorrect}/{numQuestions}
    </p>
  );
}
