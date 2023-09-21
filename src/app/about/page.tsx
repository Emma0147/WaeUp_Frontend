import LoadingPage from '@/components/LoadingPage';
import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<div className='bg-white rounded-lg shadow-md text-black py-12 my-8 px-3 m-3 flex gap-11 flex-col dark:bg-secondary dark:text-white md:mx-14 md:px-16 lg:mx-32'>
			<h2 className='text-secondary text-4xl font-bold dark:text-white'>
				About BabaOLoja
			</h2>
			<div className='flex gap-2 flex-col'>
				<p>
					The inspiration behind creating our classified ads website
					with an escrow service, BabaOloja, stemmed from the need to
					address the risks and uncertainties associated with online
					transactions. We recognized the inherent challenges faced by
					buyers and sellers in the online marketplace, such as scams,
					fraud, and unreliable parties.
				</p>
				<p>
					We wanted to provide a solution that would not only offer
					the convenience of a classified ads platform but also ensure
					the security and trust necessary for successful
					transactions. Escrow services have long been utilized in
					traditional business transactions to provide a neutral
					third-party intermediary, ensuring that funds are held
					securely until both parties are satisfied.
				</p>
				<p>
					By integrating an escrow service into our classified ads
					website, we aimed to create a safer environment where buyers
					and sellers could connect and conduct transactions with
					confidence. We wanted to eliminate the fear of scams and
					fraudulent activities, offering a transparent and fair
					system that protects the interests of all parties involved.
				</p>
				<p>
					Our goal was to revolutionize the online buying and selling
					experience by combining the ease of browsing through
					classified ads with the peace of mind that comes with escrow
					services. We sought to build trust and foster a vibrant
					marketplace where individuals could confidently trade a wide
					range of products and services.
				</p>
				<p>
					Through our dedication to security, customer support, and
					the use of cutting-edge encryption technology, we aimed to
					provide a seamless and trustworthy platform for online
					transactions. By addressing the challenges faced by buyers
					and sellers, we aspired to create an environment that would
					encourage widespread participation and ultimately redefine
					the standards of online commerce.
				</p>
				<p>
					In summary, the inspiration behind creating BabaOloja was to
					bridge the gap between convenience and security in online
					transactions, offering a classified ads website with an
					integrated escrow service that ensures safety, trust, and
					peace of mind for all users.
				</p>
			</div>
			<div>
				<h3 className='text-xl font-semibold mb-3'>
					Creator&#39;s Details:
				</h3>
				<span className='flex flex-col gap-2'>
					<Link
						href={'https://www.linkedin.com/in/chibuike-ezeiru'}
						className='flex gap-2 text-goldColor'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'>
							<path d='M20.27,20.27H16.18V14.35c0-1.39-.03-3.17-1.93-3.17-1.92,0-2.22,1.5-2.22,3v5.09H8V9h3.75v1.59H12c.5-1,1.74-2.06,3.57-2.06,3.81,0,4.5,2.51,4.5,5.77v6.97H20.27ZM5.92,7.68C4.28,7.68,3,6.4,3,4.75S4.28,1.82,5.92,1.82,8.85,3.1,8.85,4.75,7.57,7.68,5.92,7.68ZM3.5,20.27h4.09V9.18H3.5Z' />
						</svg>
						<p>LinkedIn</p>
					</Link>
					<Link
						href='https://github.com/NaijasonEzeiru'
						className='flex gap-2 text-goldColor'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12 0C5.37 0 0 5.37 0 12C0 17.3 3.438 21.57 8.205 23.313C8.805 23.428 9.01 23.058 9.01 22.74V20.706C6.564 21.38 5.913 19.714 5.913 19.714C5.51 18.787 4.84 18.466 4.84 18.466C3.688 17.84 4.928 17.85 4.928 17.85C6.084 17.896 6.624 19.083 6.624 19.083C7.776 20.633 9.502 20.087 10.035 19.813C10.152 18.706 10.522 18.036 10.912 17.726C7.972 17.426 4.858 15.995 4.858 11.388C4.858 10.106 5.292 9.066 6.052 8.266C5.927 8.017 5.468 6.824 6.177 5.149C6.177 5.149 7.137 4.858 9.01 6.196C9.963 5.97 11.037 5.97 11.991 6.196C13.864 4.858 14.824 5.149 14.824 5.149C15.533 6.824 15.073 8.017 14.948 8.266C15.708 9.066 16.142 10.106 16.142 11.388C16.142 15.995 13.027 17.426 10.087 17.726C10.491 18.036 10.867 18.706 10.867 19.813V22.73C10.867 23.045 11.07 23.428 11.685 23.313C16.568 21.566 20 17.288 20 12C20 5.37 14.63 0 8 0Z'
							/>
						</svg>
						<p>GitHub</p>
					</Link>
				</span>
			</div>
			<div>
				<h3 className='text-xl font-semibold mb-3'>Repository Link:</h3>
				<Link
					href='https://github.com/NaijasonEzeiru/portfolio-project'
					className='text-goldColor flex gap-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
						/>
					</svg>
					<p>Repo Link</p>
				</Link>
			</div>
		</div>
	);
};

export default page;
