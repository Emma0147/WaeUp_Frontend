'use client';

import React, { Component, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterSchemaType } from '../../utils/schemas';
import { useRouter } from 'next/navigation';
import AuthContext from '@/components/AuthContext';
import { apiAddress } from '../../utils/variables';
import { departments, faculties, levels } from '@/utils/variables';

const Register = () => {
  const { user, authChecking }: any = useContext(AuthContext);

  const genders = ['Male', 'Female'];

  const router = useRouter();

  useEffect(() => {
    // TODO: Display "You are already logged in"
    if (user) {
      alert('You are logged in');
      router.push('/');
    }
  }, [user]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<RegisterSchemaType>({
    mode: 'onSubmit',
    resolver: zodResolver(RegisterSchema)
  });

  console.log(errors);

  const signUp = async (details: RegisterSchemaType) => {
    const res = await fetch(`${apiAddress}/register`, {
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
    } else if (data.message == 'This matric number is not available') {
      setError('matricNo', {
        type: 'server',
        message: data.message
      });
    } else if (data.message == 'This phone number is already taken') {
      setError('phone', {
        type: 'server',
        message: data.message
      });
    } else {
      alert(data?.message);
    }
  };

  return (
    <div className='min-h-[75vh] bg-white border rounded-lg shadow-md text-black text-center py-12 my-8 px-3 m-3 flex items-center dark:bg-secondary dark:text-white md:mx-14 md:px-16 lg:mx-32'>
      {
        <div className='flex gap-11 flex-col w-full'>
          <h2 className='text-secondary dark:text-white text-4xl font-bold'>
            Register
          </h2>
          <div className='flex flex-col gap-3'>
            <form
              onSubmit={handleSubmit(signUp)}
              className='flex flex-col gap-10'>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>First Name:</p>
                  </div>
                  <input
                    {...register('firstName')}
                    placeholder='John'
                    type='text'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {errors.firstName?.message}
                </span>
              </div>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>Last Name:</p>
                  </div>
                  <input
                    {...register('lastName')}
                    placeholder='Doe'
                    type='text'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors?.lastName?.message}
                </span>
              </div>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>Matric No:</p>
                  </div>
                  <input
                    type='number'
                    {...register('matricNo')}
                    placeholder='123456789'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />{' '}
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.matricNo?.message}
                </span>
              </div>
              <div className=''>
                <span className='flex gap-2 items-center'>
                  <p className='min-w-max'>Faculty:</p>
                  <select
                    {...register('faculty')}
                    className={`w-full p-[10px] bg-white rounded-md  text-base border border-gray-600`}>
                    <option value=''>--Select Faculty--</option>
                    {/* <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option> */}
                    {faculties.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </span>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.faculty?.message}
                </span>
              </div>
              <div className=''>
                <span className='flex gap-2 items-center'>
                  <p className='min-w-max'>Department:</p>
                  <select
                    {...register('department')}
                    className={`w-full p-[10px] bg-white rounded-md  text-base border border-gray-600`}>
                    <option value=''>--Select Department--</option>
                    {departments.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </span>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.department?.message}
                </span>
              </div>
              <div className=''>
                <span className='flex gap-2 items-center'>
                  <p className='min-w-max'>Level:</p>
                  <select
                    {...register('level')}
                    className={`w-full p-[10px] bg-white rounded-md  text-base border border-gray-600`}>
                    <option value=''>--Select Level--</option>
                    {/* <option value='A'>A</option>
                    <option value='B'>B</option>
                    <option value='C'>C</option>
                    <option value='D'>D</option> */}
                    {levels.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </span>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.level?.message}
                </span>
              </div>
              <div className=''>
                <span className='flex gap-2 items-center'>
                  <p className='min-w-max'>Gender:</p>
                  <select
                    {...register('gender')}
                    className={`w-full p-[10px] bg-white rounded-md  text-base border border-gray-600`}>
                    <option value=''>--Select Gender--</option>
                    {genders.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </span>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.gender?.message}
                </span>
              </div>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>Email:</p>
                  </div>
                  <input
                    type='email'
                    {...register('email')}
                    placeholder='abc@example.com'
                    name='email'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />{' '}
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.email?.message}
                </span>
              </div>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>Phone Number:</p>
                  </div>
                  <input
                    type='number'
                    {...register('phone')}
                    placeholder='08012345678'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />{' '}
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.phone?.message}
                </span>
              </div>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>Password:</p>
                  </div>
                  <input
                    type='password'
                    {...register('password')}
                    placeholder='Password'
                    name='password'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.password?.message}
                </span>
              </div>
              <div>
                <label className='w-full h-6 flex text-black dark:text-gray-100 gap-2'>
                  <div>
                    <p className='w-max'>Confirm Password:</p>
                  </div>
                  <input
                    {...register('confirmPassword')}
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    className='w-full focus-visible:outline-0 border-b-2 border-gray-400 focus-visible:border-b-[1px] focus-visible:border-solid focus-visible:border-goldColor bg-transparent'
                  />
                </label>
                <span className='text-red-400 dark:text-red-300 text-xs'>
                  {' '}
                  {errors.confirmPassword?.message}
                </span>
              </div>
              {/* <div className={styles.remember}>
						<form action="">
							<input
								type="checkbox"
								id="remember"
								name="remember"
							/>
							<label htmlFor="remember">Remember me</label>
						</form>
					</div> */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='flex disabled:bg-loadingSecondary dark:disabled:bg-disabledGold gap-2 py-2 px-5 rounded-lg shadow-md bg-secondary dark:bg-goldColor text-white dark:text-black w-max m-auto'>
                <div className={isSubmitting ? 'lds' : 'hidden'}>
                  <div className='bg-white dark:bg-gray-800'></div>
                  <div className='bg-white dark:bg-gray-800'></div>
                  <div className='bg-white dark:bg-gray-800'></div>
                </div>
                <p>Sign Up</p>
              </button>
            </form>
            <div>
              <p className='text-sm text-black dark:text-white'>
                Already have an account?{' '}
                <Link
                  href='/login'
                  className='text-secondary underline dark:text-goldColor'>
                  Click here to log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Register;
