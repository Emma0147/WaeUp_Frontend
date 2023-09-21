'use client';

import React, { useEffect, useState } from 'react';
import { object } from 'zod';
import AnswerOptions from '@/components/answers/AnswerOptions';
import { QuestionsSchemaType } from '@/utils/schemas';
import { buffer } from 'stream/consumers';
import { useRouter } from 'next/navigation';
import { apiAddress } from '@/utils/variables';

// const reducer = (state, action) => {
//     switch (action.type) {

//     }
// }

type Options = 'A' | 'B' | 'C' | 'D';

const QuizPage = ({ params }: { params: { course: string } }) => {
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [all, setAll] = useState([]);
  const [full, setFull] = useState({});
  const [questionNumber, setQuestionNumber] = useState(0);
  const [err, setErr] = useState('');

  const router = useRouter();

  useEffect(() => {
    qs();
  }, []);

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSubmitting(true);
    e.preventDefault();
    if (all.filter((a) => a.answer == '').length > 0) {
      setErr('Answer all questions');
      return;
    }
    console.log({ full });
    let v = full;
    v.q = [...all];
    // full.q = [...all];
    // console.log({ full });
    const res = await fetch(`${apiAddress}/quiz/answers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(v),
      credentials: 'include'
    });
    const data = await res.json();
    console.log(data);
    setSubmitting(false);
    if (res.ok) {
      alert(`You scored ${data.score} out of ${data.len}`);
      router.push('/');
    } else {
      console.error(data);
    }
  };

  const qs = async () => {
    setLoading(true);
    const res = await fetch(`${apiAddress}/quiz/${params.course}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if (res.ok) {
      setAll(data.questions[0].q);
      setFull(data.questions[0]);
      console.log(full);
    } else {
      console.error(data);
    }
  };

  console.log(all.map((a) => a.answer == ''));

  const updateAll = (oh: string) => {
    let oldVal = [...all];
    oldVal[questionNumber].answer = oh;
    setAll([...oldVal]);
  };

  return (
    <div>
      {all.length > 0 && (
        <>
          <h1 className='text-center text-xl'>Quiz</h1>
          <hr />
          <br />
          <h6>
            {questionNumber + 1} / {all.length}
          </h6>
          <span>
            <h3 className='text-center text-2xl text-secondary font-medium'>
              {all[questionNumber].question}
            </h3>
          </span>
          <form className='flex flex-col'>
            {Object.keys(all[questionNumber].options).map((option) => (
              <span key={option} className='border p-2 my-3 rounded-md'>
                <label>
                  <input
                    type='radio'
                    value={option}
                    onChange={(e) => {
                      setErr('');
                      updateAll(e.target.value);
                    }}
                    checked={option === all[questionNumber].answer}
                  />
                  <span className='pl-3'>
                    {option}: {all[questionNumber].options[option]}
                  </span>
                </label>
              </span>
            ))}
            <p>{err && err}</p>
            <span className='flex justify-between text-white py-5'>
              <button
                className='px-4 py-2 rounded-md disabled:opacity-20 bg-secondary'
                type='button'
                disabled={questionNumber === 0}
                onClick={() => setQuestionNumber(questionNumber - 1)}>
                prev
              </button>
              <button
                className='px-4 py-2 rounded-md disabled:opacity-20 bg-yellow-700'
                disabled={questionNumber !== all.length - 1}
                onClick={(e) => submitHandler(e)}>
                Submit
              </button>
              <button
                className='px-4 py-2 rounded-md disabled:opacity-20 bg-secondary'
                disabled={questionNumber === all.length - 1}
                type='button'
                onClick={() => setQuestionNumber(questionNumber + 1)}>
                Next
              </button>
            </span>
          </form>
          <p className='text-2xl'>{questionNumber}</p>
        </>
      )}
    </div>
  );
};

export default QuizPage;
