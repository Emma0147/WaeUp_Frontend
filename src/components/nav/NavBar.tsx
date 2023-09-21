'use client';
import Link from 'next/link';
import React, { useContext, useRef } from 'react';
import { useState, useEffect } from 'react';
import Dropdown from './DropDown';
import AuthContext from '../AuthContext';

const NavBar = () => {
  const { user, authChecking, signout }: { user: {}; authChecking: boolean } =
    useContext(AuthContext);
  const [ham, setHam] = useState(false);
  const navRef = useRef(null);

  // useEffect(() => {
  // 	function handleClickOutsideModal(event) {
  // 		if (navRef.current && !navRef.current.contains(event.target)) {
  // 			setHam(false);
  // 		}
  // 	}
  // 	document.addEventListener('mousedown', handleClickOutsideModal);
  // 	return () => {
  // 		document.removeEventListener('mousedown', handleClickOutsideModal);
  // 	};
  // }, [navRef]);

  return (
    <header
      className='bg-gray-100 flex items-center justify-between px-3 text-sm py-2 md:px-14 lg:px-32 dark:bg-secondary'
      ref={navRef}>
      <Link
        href={'/'}
        className='focus-visible:outline focus-visible:outline-1 focus-visible:outline-orange-400 text-xl font-extrabold border bg-white px-3 py-2 rounded-md border-secondary'>
        <span className='text-secondary rounded-sm px-1'>WeaUp</span>
      </Link>
      <nav
        className={`flex gap-2 w-full left-0 absolute transition-transform z-50 bg-gray-100 flex-col py-8 px-2 top-14 md:w-auto md:static md:bg-transparent md:flex-row md:translate-x-0 md:py-0 dark:bg-secondary ${
          !ham && 'transition-transform -translate-x-full'
        }`}>
        <Link href='/student/quiz'>
          <p className='table px-3 w-full cursor-pointer'>Quiz</p>
        </Link>
        <Link href='/admin/questions'>
          <p className='table px-3 w-full cursor-pointer'>Set Questions</p>
        </Link>
        <hr className='dark:opacity-30' />
      </nav>

      <div className='flex gap-3 items-center'>
        {user ? (
          <button
            onClick={signout}
            className='py-2 px-4 text-white bg-secondary rounded-md'>
            Logout
          </button>
        ) : (
          <Link href={'/login'}>
            <button className='py-2 px-4 text-white bg-secondary rounded-md'>
              Login
            </button>
          </Link>
        )}
      </div>
      <span
        tabIndex={0}
        className={
          'group border-[1px] border-black dark:border-white py-3 px-2 relative bg-transparent shadow-md md:hidden rounded-lg'
        }
        onClick={() => setHam(!ham)}>
        <span
          className={`relative h-[2px] block w-5 bg-black dark:bg-white before:absolute before:top-[-6px] before:left-0 before:h-[2px] before:w-full before:bg-black before:dark:bg-white before:content-[""] before:transition-transform after:absolute after:top-[6px] after:left-0 after:h-[2px] after:w-full after:bg-black after:dark:bg-white after:content-[""] after:transition-transform  ${
            ham &&
            'duration-1000 before:-rotate-45 after:rotate-45 before:-translate-x-[5px] before:translate-y-[1px] before:transition-transform after:-translate-x-[5px] after:-translate-y-[1px] after:scale-x-75 before:scale-x-75 after:transition-transform'
          }`}></span>
        <span className='hidden group-focus:block group-hover:block bg-secondary text-white rounded-[4px] py-[1px] px-[3px] text-xs text-center z-50 absolute top-[110%] left-0 dark:bg-white dark:text-black after:content-[""] after:absolute after:bottom-full after:left-[40%] after:-ml[5px] after:border-[5px] after:border-solid after:border-b-secondary after:border-x-transparent after:border-t-transparent dark:after:border-b-white'>
          Menu
        </span>
      </span>
    </header>
  );
};

export default NavBar;
