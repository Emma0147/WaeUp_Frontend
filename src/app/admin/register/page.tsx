'use client';

import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, LoginSchemaType } from '../../../utils/schemas';
import AuthContext from '../../../components/AuthContext';
import { useRouter } from 'next/navigation';
import { apiAddress } from '@/utils/variables';

const RegAdmin = () => {
  const { user, authChecking, err } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    //TODO: display "you are logged in already"
    if (user) {
      alert('You are logged in');
      router.push('/');
    }
  }, [user]);

  useEffect(() => {
    if (err?.message == 'Email address is not registered') {
      setError('email', {
        type: 'server',
        message: 'Email address is not registered'
      });
    } else if (err?.message == 'Incorrect password. Try again') {
      setError('password', {
        type: 'server',
        message: 'Incorrect password. Try again'
      });
    } else if (err) {
      alert('Something went wrong');
    }
  }, [err]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<LoginSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginSchema)
  });

  const signUp = async (details: LoginSchemaType) => {
    const res = await fetch(`${apiAddress}/register/admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    });
    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      router.push('/login');
    } else if (data.message == 'This email address is already taken') {
      setError('email', {
        type: 'server',
        message: data.message
      });
    } else if (data.message == 'Wrong admin password') {
      setError('password', {
        message: data.message
      });
    } else {
      alert(data?.message);
    }
  };

  return (
    <div className='min-h-[75vh] bg-white border rounded-lg shadow-md text-black text-center py-12 my-8 px-3 m-3 flex gap-11 flex-col dark:bg-secondary dark:text-white md:mx-14 md:px-16 lg:mx-32 justify-center'>
      <div className='flex gap-11 flex-col w-full'>
        <h2 className='text-secondary text-4xl font-bold dark:text-white'>
          ADMIN REGISTER
        </h2>
        <div className='flex flex-col gap-3'>
          <form
            onSubmit={handleSubmit(signUp)}
            method='POST'
            className='flex flex-col gap-10'>
            <div>
              <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2 items-center'>
                <p className='w-max'>Email:</p>
                <div className=' w-full flex'>
                  <input
                    type='text'
                    autoComplete='email'
                    {...register('email')}
                    placeholder='abc@example.com'
                    id='email'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 bg-transparent focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor'
                  />
                  {/* <svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
									/>
								</svg> */}
                </div>
              </label>
              <span className='text-red-400 text-xs'>
                <p>{errors?.email?.message}</p>
              </span>
            </div>
            <div className='relative'>
              <label className='w-full h-6 gap-2 flex text-black dark:text-gray-100'>
                <p className='w-max'>Password:</p>
                <div className=' w-full flex'>
                  <input
                    type='password'
                    autoComplete='password'
                    {...register('password')}
                    placeholder='password'
                    id='password'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 bg-transparent focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor'
                  />
                </div>
              </label>
              <span className='text-red-400 text-xs'>
                <p>{errors?.password?.message}</p>
              </span>
            </div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='flex disabled:bg-loadingSecondary gap-2 py-2 px-5 rounded-lg shadow-md bg-secondary dark:bg-goldColor text-white dark:text-black w-max m-auto'>
              <p>Sign up</p>
            </button>
          </form>

          <Link href={'#'}>
            <p className='text-secondary underline text-sm '>
              Forgot Password?
            </p>
          </Link>
          <div>
            <p className='text-sm  text-black dark:text-white'>
              Do not have an account?{' '}
              <Link
                href={'/register'}
                className='text-secondary underline dark:text-goldColor'>
                Click here to sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegAdmin;
