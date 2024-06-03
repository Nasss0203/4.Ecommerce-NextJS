import { Fragment } from 'react';
import { Header } from './components';

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Fragment>
			<Header />
			<div className='px-2.5 md:px-0'>{children}</div>
		</Fragment>
	);
}
