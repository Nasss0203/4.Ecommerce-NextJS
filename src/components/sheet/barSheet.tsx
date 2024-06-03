'use client';
import { FaBars } from 'react-icons/fa6';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

const categories = [
	{
		key: 1,
		name: 'Điện thoại',
	},
	{
		key: 2,
		name: 'Tablet',
	},
	{
		key: 3,
		name: 'Laptop',
	},
	{
		key: 4,
		name: 'Phụ kiện',
	},
	{
		key: 5,
		name: 'Màn hình máy tính',
	},
	{
		key: 6,
		name: 'Đồng hồ thông minh',
	},
];

export default function Bar() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className='block gap-6 text-[28px] text-white lg:hidden'>
					<FaBars />
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className='mt-14'>
					{/* <SheetTitle>Edit profile</SheetTitle> */}
					<SheetDescription>
						<div className='flex items-center gap-1 flex-wrap'>
							{categories.map((item) => (
								<div
									className='w-[85px] px-2 py-1 border border-neutral-300 text-xs h-[40px] flex items-center justify-center rounded-md line-clamp-2'
									key={item.key}>
									{item.name}
								</div>
							))}
						</div>
					</SheetDescription>
				</SheetHeader>
				<SheetFooter>
					<SheetClose asChild></SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
