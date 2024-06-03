import { Card } from '@/components/card';
import Image from 'next/image';
import { BsBox } from 'react-icons/bs';
import { CiCreditCard1, CiHeadphones } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TfiCup } from 'react-icons/tfi';

const tag = [
	{
		key: 1,
		name: 'Fasted Delivery',
		desc: 'Delivery in 24/H',
		icon: <BsBox />,
	},
	{
		key: 2,
		name: '24 Hours Return',
		desc: '100% money-back guarantee',
		icon: <TfiCup />,
	},
	{
		key: 3,
		name: 'Secure Payment',
		desc: 'Your money is safe',
		icon: <CiCreditCard1 />,
	},
	{
		key: 4,
		name: 'Secure Payment',
		desc: 'Live contact /message',
		icon: <CiHeadphones />,
	},
];

const featuredProduct = [
	{
		key: 1,
		name: 'All product',
		active: true,
	},
	{
		key: 2,
		name: 'Smart Phone',
		active: false,
	},
	{
		key: 3,
		name: 'Laptop',
		active: false,
	},
	{
		key: 4,
		name: 'Headphone',
		active: false,
	},
	{
		key: 5,
		name: 'TV',
		active: false,
	},
];

export default function Home() {
	return (
		<div className='container lg:py-6 py-3'>
			<div className='space-y-6'>
				<div className='grid grid-cols-12 lg:gap-6 gap-2.5'>
					<div className='col-span-8'>
						<div className='w-full h-[520px]'>
							<Image
								src={'https://source.unsplash.com/random'}
								height={520}
								width={200}
								className='w-full object-cover h-full rounded'
								alt=''></Image>
						</div>
					</div>
					<div className='col-span-4 grid grid-rows-2 lg:gap-6 gap-2.5 h-[520px]'>
						<div className=''>
							<Image
								src={'https://source.unsplash.com/random'}
								height={260}
								width={200}
								className='w-full h-full object-cover rounded'
								alt=''></Image>
						</div>
						<div className=''>
							<Image
								src={'https://source.unsplash.com/random'}
								height={260}
								width={200}
								className='w-full h-full object-cover rounded'
								alt=''></Image>
						</div>
					</div>
				</div>
				<div className='lg:border border-neutral-200 rounded lg:p-4 p-2 lg:flex items-center justify-between  grid grid-cols-2 '>
					{tag.map((item) => (
						<div
							className='lg:p-4 px-3 py-2 flex items-center gap-4 col-span-1 border border-neutral-200 h-[80px] md:border-none'
							key={item.key}>
							<span className='lg:text-[40px] md:text-3xl text-xl'>
								{item.icon}
							</span>
							<div className='flex flex-col gap-1'>
								<h5 className='md:text-sm text-xs leading-5 uppercase text-gray-900 font-semibold'>
									{item.name}
								</h5>
								<span className='md:text-sm text-xs leading-5 text-gray-600 font-normal'>
									{item.desc}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='py-[70px] space-y-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-6'>
						<h4 className='text-2xl leading-8 font-semibold text-gray-900'>
							Best Deals
						</h4>
					</div>
					<div className='flex items-center gap-2 text-secondary-500'>
						<span className='text-sm leading-5 font-semibold '>
							Browse All Product
						</span>
						<span className='text-sm'>
							<FaArrowRightLong />
						</span>
					</div>
				</div>
				<div className='grid lg:grid-cols-10 grid-cols-4 md:grid-cols-6'>
					{Array(10)
						.fill(0)
						.map((item, index) => (
							<Card key={index}></Card>
						))}
				</div>
			</div>
			<div className='space-y-10'>
				<h3 className='text-[32px] leading-10 font-semibold text-gray-900 text-center'>
					Shop with Categories
				</h3>
				<div className='lg:grid grid-cols-12 lg:gap-[18px] gap-2.5 flex items-center overflow-hidden overflow-x-auto'>
					{Array(6)
						.fill(0)
						.map((item, index) => (
							<div
								className='px-3 py-6 col-span-2 border border-neutral-200 rounded space-y-[16px]'
								key={index}>
								<div className='flex justify-center'>
									<div className='w-[148px] h-[148px]'>
										<Image
											src={'/product/2.png'}
											width={148}
											height={148}
											alt=''
											className='w-full h-full object-cover'></Image>
									</div>
								</div>
								<h5 className='text-base font-medium leading-6 text-center text-gray-900'>
									Computer & Laptop
								</h5>
							</div>
						))}
				</div>
			</div>
			<div className='py-[70px] space-y-6'>
				<div className='flex flex-col'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-6'>
							<h4 className='lg:text-2xl text-xl leading-8 font-semibold text-gray-900'>
								Best Deals
							</h4>
						</div>
						<div className='items-center flex gap-4'>
							<div className='lg:flex items-center hidden '>
								{featuredProduct.map((item) => (
									<span
										className={`p-2 lg:text-sm text-xs font-semibold leading-5 ${
											item.active === true
												? 'text-gray-900 border border-primary-500 border-x-transparent border-t-transparent border-b-2'
												: 'text-gray-600'
										}`}
										key={item.key}>
										{item.name}
									</span>
								))}
							</div>
							<div className='flex items-center gap-2 text-primary-500'>
								<span className='lg:text-sm leading-5 font-semibold text-xs'>
									Browse All Product
								</span>
								<span className='text-sm'>
									<FaArrowRightLong />
								</span>
							</div>
						</div>
					</div>
					<div className='flex items-center overflow-hidden overflow-x-auto lg:hidden'>
						{featuredProduct.map((item) => (
							<span
								className={`p-2 lg:text-sm text-xs font-semibold leading-5 ${
									item.active === true
										? 'text-gray-900 border border-primary-500 border-x-transparent border-t-transparent border-b-2'
										: 'text-gray-600'
								}`}
								key={item.key}>
								{item.name}
							</span>
						))}
					</div>
				</div>
				<div className='grid lg:grid-cols-10 grid-cols-4 md:grid-cols-6'>
					{Array(10)
						.fill(0)
						.map((item, index) => (
							<Card key={index}></Card>
						))}
				</div>
			</div>
		</div>
	);
}
