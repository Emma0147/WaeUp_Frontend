'use client';
import { useContext } from 'react';
import { useState } from 'react';
import AuthContext from './AuthContext';
import Link from 'next/link';

const Hero = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='md bg-gray-100 py-28 px-3 md:px-14 lg:px-32 flex flex-col gap-4 justify-center'>
      <p className='text-5xl md:max-w-[50%]'>
        <i>{user?.firstName && user.firstName + ','}</i> Welcome to WeaUp.org
        Exam Portal{' '}
      </p>
      <i className='text-3xl text-secondary'>An Online Examination Platform</i>
      <Link href={user ? '/student/quiz' : '/login'}>
        <button className='py-2 px-4 border border-secondary rounded-md mt-3'>
          Get Started &gt;
        </button>
      </Link>
    </div>
  );
};

export default Hero;
