'use client';

import { useEffect, useState } from 'react';
import { apiAddress } from '@/utils/variables';
import Link from 'next/link';

const QuizPage = () => {
  const [loading, setLoading] = useState(true);
  const [all, setAll] = useState([]);

  useEffect(() => {
    qs();
  }, []);

  const qs = async () => {
    const res = await fetch(`${apiAddress}/quiz`, {
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
      setAll(data.questions);
      console.log(data);
    } else {
      console.error(data);
    }
  };

  return (
    <main className='min-h-[85vh]'>
      {!loading && (
        <div>
          {all.length < 1 ? (
            <p className='text-center py-3'>No Quiz Available</p>
          ) : (
            <div className='flex gap-2 flex-col p-5'>
              <h2 className='text-center text-3xl text-secondary'>
                Available Quizes
              </h2>
              {all.map((a, b) => (
                <Link
                  key={b}
                  href={`/student/quiz/${a.course}`}
                  className='text-xl border p-3'>
                  <h3>{a.course}</h3>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default QuizPage;
