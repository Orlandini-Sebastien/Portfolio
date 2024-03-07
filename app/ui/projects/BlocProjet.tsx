'use client'
import { ReactElement } from 'react'
import TitleProjet from './TitleProjet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import data from '../../../public/dataProjet.json'
import Link from 'next/link'
import Image from 'next/image'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

const BlocProgress = (): ReactElement => {
  const { width: windowWidth } = useWindowSize()
  let width: number, height: number
  let widthIcon : number, heightIcon:number

  // Définir les dimensions en fonction de la largeur de la fenêtre
  if (windowWidth < 640) {
    width = 500
    height = 500
  } else if (windowWidth >= 640 && windowWidth < 1200) {
    width = 400
    height = 400
  } else {
    width = 500
    height = 500
   
  }

  return (
    <section>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <TitleProjet title={item.projet} />
            <div className="max-lg:flex-col  my-2 flex w-full items-center rounded-lg border border-b-2 bg-slate-50 p-2 shadow  ">
              <Image
                loading="lazy"
                width={width}
                height={height}
                src={item.image}
                alt={item.projet}
              />

              <div className="flex flex-1 flex-col items-center justify-center  ">
                <div className="text-xl font-bold">Frontend</div>
                <Link
                  className="my-2 flex w-11/12 items-center justify-center rounded-lg border border-b-2 bg-slate-50 p-2 shadow   "
                  target="_blank"
                  href={item.url.front}
                >
                  <span className="px-2">
                    <FontAwesomeIcon className="h-8 " icon={faGithub} />
                  </span>
                  <span className="max-xl:hidden">{item.title.front}</span>
                </Link>

                {item.url.back && (
                  <>
                    <div className="text-xl font-bold">Backend</div>
                    <Link
                      className="my-2 flex w-11/12 items-center justify-center rounded-lg border border-b-2 bg-slate-50 p-2 shadow   "
                      target="_blank"
                      href={item.url.back}
                    >
                      <span className="px-2">
                        <FontAwesomeIcon className="h-8 " icon={faGithub} />
                      </span>
                      <span className="max-xl:hidden">{item.title.back}</span>
                    </Link>
                  </>
                )}

                <div className="flex  flex-wrap justify-around   ">
                  {item.technos.map((techno, index) => {
                    return (
                      <Image
                        key={index}
                        className="mx-6 my-2 shrink-0  "
                        width={width/15}
                        height={height/15}
                        src={techno.icon}
                        alt={techno.name}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default BlocProgress
