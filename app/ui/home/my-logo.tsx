import { FolderOpenIcon } from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'

export default function myLogo() {
  return (
    <div
      className={`${lusitana.className} flex  items-center justify-start leading-none text-white md:flex-col`}
    >
      <div className="flex flex-row items-center">
        <FolderOpenIcon className="h-14 w-14 rotate-[10deg] " />
        <p className="text-[30px]">Portfolio</p>
      </div>
    </div>
  )
}
