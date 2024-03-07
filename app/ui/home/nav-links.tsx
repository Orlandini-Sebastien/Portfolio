'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  FireIcon,
  FaceSmileIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const links = [
  { name: 'Sur moi', href: '/', icon: FaceSmileIcon },
  {
    name: 'Projets',
    href: '/projects',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Mes progrès', href: '/progress', icon: FireIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center justify-center gap-2 rounded-md bg-gray-50 p-3  text-sm  hover:bg-amber-50 hover:text-orange-400 max-md:grow md:h-[15%]  md:justify-start md:p-2 md:px-3 font-bold',
              {
                'bg-amber-50 text-orange-400': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
