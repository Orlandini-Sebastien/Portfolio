import { FolderOpenIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'
export default function myLogo() {
  return <Image className='flex object-cover' src={'/logo.png'} alt="logo" width={500} height={15} />
}
