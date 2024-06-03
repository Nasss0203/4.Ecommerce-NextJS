import Image from 'next/image';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoEyeOutline, IoStar } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

export default function Card() {
	return (
		<div className='border border-neutral-200 px-6 pt-4 pb-5 col-span-2 rounded space-y-6'>
			<div className='relative'>
				<div className='lg:h-[268px] flex justify-center'>
					<Image
						src={'/product/1.png'}
						width={280}
						height={268}
						alt=''
						loading='lazy'
						className='h-full w-full object-cover'></Image>
				</div>
			</div>
			<div className='md:space-y-3 space-y-2'>
				<div className='space-y-1'>
					<div className='space-x-1 flex'>
						<div className='flex items-center gap-1 text-xs md:text-sm text-warning-500'>
							{Array(5)
								.fill(0)
								.map((item, index) => (
									<span key={index}>
										<IoStar />
									</span>
								))}
						</div>
						<span className='leading-5 text-xs md:text-sm font-normal text-gray-500'>
							(52,677)
						</span>
					</div>
					<p className='line-clamp-2 text-sm md:text-base leading-6 font-normal text-gray-900'>
						Xbox Series S - 512GB SSD Console with Wireless Controller - EU
						Versio
					</p>
				</div>
				<div className='flex items-center gap-1'>
					<span className='leading-5 md:leading-6 text-base md:text-lg text-secondary-500 font-semibold'>
						$442.12
					</span>
					<span className='line-through leading-5 md:leading-6 text-sm md:text-base text-gray-300'>
						$865.99
					</span>
				</div>
				<p className='md:line-clamp-3 text-sm leading-5 text-gray-600 line-clamp-2'>
					Games built using the Xbox Series X|S development kit showcase
					unparalleled load times, visuals.
				</p>
			</div>
			<div className='flex items-center gap-2'>
				<div className='flex items-center justify-center gap-1 text-white bg-primary-500 rounded-lg w-full lg:p-3 p-2'>
					<span>
						<MdOutlineRemoveRedEye />
					</span>
					<span className=' leading-6 md:text-sm text-xs uppercase font-bold'>
						Add to card
					</span>
				</div>
				<div className='lg:p-3 p-2 bg-primary-100 rounded-lg lg:text-2xl text-xl lg:flex justify-center hidden'>
					<IoMdHeartEmpty />
				</div>
			</div>
		</div>
	);
}
