import Contact from '../../components/contact'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-white max-md:p-4 md:min-h-screen md:p-12 xl:p-24 shadow-xl rounded">
      <div className="my-4 w-full rounded border-b-2 bg-slate-50 p-2 text-3xl  shadow font-bold">
        Connectons-nous !{' '}
      </div>
      <div className="flex w-full gap-4 max-xl:flex-col xl:h-[450px] xl:flex-row ">
        <div className="my-4 flex w-full items-center rounded-lg border border-b-2 bg-amber-50 p-2 shadow max-xl:flex-row max-xl:gap-4 xl:flex-col  ">
          <Link
            className=" my-2 flex w-full items-center rounded-lg border border-b-2 bg-slate-50 p-2 shadow max-xl:justify-center  "
            target="_blank"
            href={'https://github.com/Orlandini-Sebastien'}
          >
            <span className="px-2">
              <FontAwesomeIcon className="h-8 " icon={faGithub} />
            </span>
            <span className="max-xl:hidden">Orlandini-Sebastien</span>
          </Link>
          <Link
            className=" my-4 flex w-full items-center rounded-lg border border-b-2 bg-slate-50 p-2 shadow max-xl:justify-center "
            target="_blank"
            href={'www.linkedin.com/in/sebastien-orlandini-462840292'}
          >
            <span className="px-2">
              <FontAwesomeIcon
                className="h-8 text-blue-500 "
                icon={faLinkedin}
              />
            </span>
            <span className="max-xl:hidden">Orlandini-Sebastien</span>
          </Link>
          <Link
            className=" my-4 flex w-full items-center rounded-lg border border-b-2 bg-slate-50 p-2 shadow max-xl:justify-center "
            target="_blank"
            href={'mailto:sebastien.orlandini@gmail.com'}
          >
            <span className="px-2">
              <FontAwesomeIcon
                className="h-8 text-amber-400 "
                icon={faEnvelope}
              />
            </span>
            <span className="max-xl:hidden">sebastien.orlandini@gmail.com</span>
          </Link>
        </div>
        <div className="my-4 flex w-full flex-col items-center rounded-lg border border-b-2 bg-amber-50 p-2 shadow  ">
          <Contact />
        </div>
      </div>
    </main>
  )
}
