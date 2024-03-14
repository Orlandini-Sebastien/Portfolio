'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import useTypewriter from 'react-typewriter-hook'
import React, { useState, useEffect, useRef, DragEventHandler } from 'react'
import ReactDOM from 'react-dom'
import styles from './Cursor.module.css'
import Qualite from '../components/Qualite'
import Carousel from '@/components/carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

const dev: string[] = [' React', ' Frontend', ' Backend']
let index: number = 0
export default function Home(): JSX.Element {
  const [devName, setDevName] = useState<string>(' MERN Stack')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const name = useTypewriter(devName)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : ++index
      setDevName(dev[index])
    }, 5000)
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [devName])

  return (
    <main className=" flex min-h-screen flex-col items-center bg-slate-50 shadow-xl">
      <div className="my-4 flex w-11/12 items-center  justify-around max-xl:hidden  xl:flex-row">
        <Image
          width={200}
          height={200}
          src={'/photoProfil.png'}
          alt="photo de profil"
        ></Image>
        <div className="h-2/3 w-1/2 px-4  font-bold text-gray-900 md:text-lg lg:text-xl xl:text-2xl  ">
          <div>
            <p>
              {' '}
              Orlandini Sébastien
              <a href="/cv.pdf" download="Orlandini-Sebastien.CV.pdf">
                {' '}
                <FontAwesomeIcon
                  className="h-6 text-orange-200 "
                  icon={faFile}
                />
              </a>
            </p>
            <p>
              Développeur{' '}
              <span className={`${styles.cursor} text-red-300`}> {name}</span>
            </p>
            <div className="md:text-md text-gray-600 lg:text-lg xl:text-xl  ">
              En quête de nouveaux défis professionnels.
            </div>
          </div>
          <div className="md-text-md text-right italic text-gray-400 lg:text-lg xl:text-xl">
            <div>entre Luxembourg et Nancy</div>
            <div>ou en full-remote</div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46193.85233993836!2d6.146763710673335!3d49.10508885509453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b6074b6a9%3A0x596be4b635bba669!2sMetz!5e0!3m2!1sfr!2sfr!4v1709292302569!5m2!1sfr!2sfr"
          width="300"
          height="300"
          className="rounded-3xl border-2 border-orange-500 shadow-xl"
          loading="lazy"
        ></iframe>
      </div>

      <div className="my-4 flex w-11/12 max-xl:flex-col xl:hidden">
        <div className="flex h-2/3 w-full  items-center px-4 font-bold text-gray-900 max-md:justify-center md:justify-start md:text-lg lg:text-xl xl:text-2xl   ">
          <Image
            width={200}
            height={200}
            src={'/photoProfil.png'}
            alt="photo de profil"
          ></Image>
          <div>
            <p>
              Orlandini Sébastien{' '}
              <a href="/cv.pdf" download="Orlandini-Sebastien.CV.pdf">
                {' '}
                <FontAwesomeIcon
                  className="h-4 text-orange-200 "
                  icon={faFile}
                />
              </a>
            </p>
            <p>
              Développeur{' '}
              <span className={`${styles.cursor} text-red-300`}> {name}</span>
            </p>{' '}
            <div className="md:text-md text-gray-600 lg:text-lg xl:text-xl  ">
              En quête de nouveaux défis professionnels.
            </div>
          </div>
        </div>
        <div className="flex w-full  items-center justify-end max-md:flex-col">
          <div className="h-2/3 w-1/2 px-4  font-bold text-gray-900 max-md:w-full md:text-lg lg:text-xl xl:text-2xl  ">
            <div className="md:text-md italic text-gray-400 max-md:my-2 max-md:w-full max-md:text-center md:text-right lg:text-lg xl:text-xl">
              <div>entre Luxembourg et Nancy</div>
              <div> ou en full-remote</div>
            </div>
          </div>
          <div className="h-[300px] w-[300px] overflow-hidden rounded-3xl border-2 border-orange-500 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46193.85233993836!2d6.146763710673335!3d49.10508885509453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b6074b6a9%3A0x596be4b635bba669!2sMetz!5e0!3m2!1sfr!2sfr!4v1709292302569!5m2!1sfr!2sfr"
              width="300"
              height="300"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className=" mb-4 flex w-11/12 flex-1 flex-col  items-center justify-center gap-20 xl:flex-row">
        <div className="flex w-full  flex-col items-center justify-center xl:w-1/2">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75, delay: 0.75 }}
            className="my-4 mb-20 flex w-full justify-center rounded border-b-2 bg-amber-50 p-2 text-2xl  font-bold shadow"
          >
            Savoir-être
          </motion.div>
          <div className="my-2  ">
            <Qualite />
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center xl:w-1/2">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75, delay: 0.75 }}
            className="my-4 mb-20 flex w-full justify-center rounded border-b-2 bg-amber-50 p-2 text-2xl  font-bold shadow"
          >
            Savoir-faire
          </motion.div>
          <div className="my-2 ">
            <Carousel />
          </div>
        </div>
      </div>
    </main>
  )
}
