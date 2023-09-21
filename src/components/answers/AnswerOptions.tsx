// import { useState } from 'react';
'use client';
import { useState } from 'react';

const AnswerOptions = ({
  opt,
  optDetails,
  answer,
  setAnswer
}: {
  optDetails: string;
  opt: 'A' | 'B' | 'C' | 'D';
  answer: string;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <label>
      {' '}
      <input
        name='answer'
        type='radio'
        value={opt}
        checked={answer === opt}
        // checked={false}
        onChange={(e) => setAnswer(e.target.value)}
      />
      {opt}: {optDetails}
    </label>
  );
};

export default AnswerOptions;
