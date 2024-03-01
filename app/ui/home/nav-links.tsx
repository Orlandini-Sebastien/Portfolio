'use client';
import {
	FireIcon,
	FaceSmileIcon,
	DocumentDuplicateIcon,
	EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
	{ name: 'About Me', href: '/', icon: FaceSmileIcon},
	{
		name: 'Projects',
		href: '/projects',
		icon: DocumentDuplicateIcon,
	},
	{ name: 'My progress', href: '/progress', icon: FireIcon },
	{ name: 'Contact', href: '/contact', icon: EnvelopeIcon },
];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex md:h-[15%] max-md:grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium bg-gray-50 hover:bg-amber-50 hover:text-orange-400  md:justify-start md:p-2 md:px-3',
							{
								'bg-amber-50 text-orange-400': pathname === link.href,
							}
						)}
					>
						<LinkIcon className="w-6" />
						<p className="hidden md:block">{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
