'use client';

import AuthContext from '@/components/AuthContext';
import LoadingPage from '@/components/LoadingPage';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';

const ProfilePage = () => {
	const { signout, error, user, authChecking }: any = useContext(AuthContext);

	const router = useRouter();

	useEffect(() => {
		user || router.push('/login');
	}, [user]);

	return (
		<div className='min-h-[75vh] bg-white rounded-lg shadow-md text-black py-12 my-8 px-3 m-3 flex gap-11 flex-col dark:bg-secondary dark:text-white md:mx-14 md:px-16 lg:mx-32 justify-center'>
			{authChecking || !user ? (
				<LoadingPage />
			) : (
				<div className='flex flex-col gap-3'>
					{/* TODO: Tips on hiw to get an effective add */}
					{/* <h2 className='text-secondary text-3xl font-bold dark:text-white text-center mb-5'>
					Your Page
				</h2> */}
					<div className='flex gap-2 flex-col items-center justify-center mb-9'>
						<div className='w-28 h-28 rounded-full border-solid border-2 border-secondary shadow-lg bg-gray-100 flex items-center justify-center dark:bg-primary dark:border-gray-100'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-14 h-14'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
								/>
							</svg>
						</div>
						<p className='text-lg font-semibold'>John Doe</p>
					</div>
					<Link
						href={'#'}
						className='w-full p-3 bg-gray-100 rounded-lg hover:bg-secondary hover:text-white dark:bg-primary transition-all hover:transition-all dark:hover:bg-white dark:hover:text-secondary custom-shadow'>
						<p>My Adverts</p>
					</Link>
					<Link
						href={'#'}
						className='w-full p-3 bg-gray-100 rounded-lg hover:bg-secondary hover:text-white dark:bg-primary transition-all hover:transition-all dark:hover:bg-white dark:hover:text-secondary custom-shadow'>
						<p>Edit Profile</p>
					</Link>
					<Link
						href={'#'}
						className='w-full p-3 bg-gray-100 rounded-lg hover:bg-secondary hover:text-white dark:bg-primary transition-all hover:transition-all dark:hover:bg-white dark:hover:text-secondary custom-shadow'>
						<p>Notifications</p>
					</Link>
					<Link
						href={'#'}
						className='w-full p-3 bg-gray-100 rounded-lg hover:bg-secondary hover:text-white dark:bg-primary transition-all hover:transition-all dark:hover:bg-white dark:hover:text-secondary custom-shadow'>
						<p>Performance</p>
					</Link>
					<Link
						href={'#'}
						className='w-full p-3 bg-gray-100 rounded-lg hover:bg-secondary hover:text-white dark:bg-primary transition-all hover:transition-all dark:hover:bg-white dark:hover:text-secondary custom-shadow'>
						<p>Wallet</p>
					</Link>
					<Link
						href={'#'}
						className='w-full p-3 bg-gray-100 rounded-lg hover:bg-secondary hover:text-white dark:bg-primary transition-all hover:transition-all dark:hover:bg-white dark:hover:text-secondary custom-shadow'>
						<p>Transactions</p>
					</Link>
					<button
						onClick={signout}
						className='flex mt-5 gap-1 py-2 px-5 rounded-lg shadow-md bg-secondary dark:bg-goldColor text-white dark:text-black w-max m-auto'>
						Log Out
					</button>
				</div>
			)}
		</div>
	);
};

export default ProfilePage;
