import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import MyLogo from '@/app/ui/home/my-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
	return (
		<div className="flex h-full flex-col px-3 py-4 md:px-2 ">
			<Link
				className="mb-2 flex  h-20 items-center justify-start rounded-md bg-orange-400 p-4 md:h-40"
				href="/"
			>
				<div className="w-36 text-white  ">
					<MyLogo />
				</div>
			</Link >
			<div className="flex grow flex-row justify-around space-x-2 md:flex-col md:space-x-0 md:space-y-2">
				<NavLinks />
			</div>
		</div>
	);
}
