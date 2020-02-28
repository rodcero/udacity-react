import React from 'react';

export default function Game(props) {
  const { equation, submitAnswer } = props;
  return (
    <div className="game">
      <h2>Mental Math</h2>
      <div className="equation">
        <p className="text">{equation}</p>
      </div>
      <button onClick={() => submitAnswer(true)}>True</button>
      <button onClick={() => submitAnswer(false)}>False</button>
    </div>
  );
}
