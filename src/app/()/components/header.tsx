'use client';
import { Bar } from '@/components/sheet';
import Image from 'next/image';
import React from 'react';
import {
	FaBars,
	FaInstagram,
	FaRegHeart,
	FaXTwitter,
	FaYoutube,
} from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { MdFacebook } from 'react-icons/md';

const icon = [
	{
		key: 1,
		icon: <FaXTwitter />,
	},
	{
		key: 2,
		icon: <MdFacebook />,
	},
	{
		key: 3,
		icon: <FaYoutube />,
	},
	{
		key: 4,
		icon: <FaInstagram />,
	},
];

export default function Header() {
	return (
		<div className='sticky top-0 z-40'>
			<div className='py-3 bg-secondary-700 border border-x-transparent border-t-transparent hidden lg:block'>
				<div className='container px-2.5 md:px-0'>
					<div className='flex items-center lg:justify-between'>
						<span className='text-sm leading-5 font-normal text-white'>
							Welcome to Clicon online eCommerce store.
						</span>
						<div className='flex gap-3'>
							<span className='text-sm leading-5 font-normal text-white'>
								Follow us:
							</span>
							<div className='flex  items-center gap-3'>
								{icon.map((item) => (
									<span key={item.key} className='w-4 h-6 text-white'>
										{item.icon}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='py-5 bg-secondary-700'>
				<div className='container flex items-center justify-between px-2.5 md:px-0'>
					<div className='flex items-center gap-2'>
						<Image
							src={'/icon.svg'}
							width={48}
							height={48}
							alt=''
							className='lg:w-[48px] lg:h-[48px] h-7 w-7 object-cover'></Image>
						<h1 className='leading-10 font-bold text-[32px] text-white uppercase lg:block hidden'>
							NASS
						</h1>
					</div>
					<div className='lg:flex items-center gap-2 px-5 py-[14px] bg-white rounded hidden'>
						<input type='text' className='w-[578px] bg-transparent' />
						<span className='text-lg'>
							<IoSearchOutline />
						</span>
					</div>
					<div className='lg:flex items-center gap-6 text-[32px] text-white hidden'>
						<span>
							<LuShoppingCart />
						</span>
						<span>
							<FaRegHeart />
						</span>
						<span>
							<GoPerson />
						</span>
					</div>
					<Bar />
				</div>
			</div>
			<div className='border border-x-transparent border-t-transparent border-b-[1px] border-neutral-200 py-4 hidden lg:block bg-white'>
				<div className='flex items-center justify-between container'>
					<div>
						<div className='flex items-center gap-1.5 px-6 py-3 bg-gray-50 rounded'>
							<span className='leading-5 text-sm font-medium text-gray-900'>
								All Category
							</span>
							<span>
								<IoIosArrowDown />
							</span>
						</div>
					</div>
					<div className='flex items-center gap-1.5'>
						<span className='text-xl'>
							<FiPhoneCall />
						</span>
						<span className='leading-5 text-lg font-medium text-gray-900'>
							+84-123-456-789
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
