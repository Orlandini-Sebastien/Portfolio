'use client'
import Image from 'next/image'
import useTypewriter from 'react-typewriter-hook'
import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styles from './Cursor.module.css'
import Qualite from './components/Qualite'

const MagicOcean: string[] = [' React', ' Frontend', ' Backend']
let index: number = 0
export default function Home(): JSX.Element {
  const [magicName, setMagicName] = useState<string>(' Full-Stack')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const name = useTypewriter(magicName)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      index = index > 2 ? 0 : ++index
      setMagicName(MagicOcean[index])
    }, 5000)
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [magicName])

  return (
    <main className=" flex min-h-screen flex-col items-center bg-slate-50 shadow-xl">
      <div className="my-4 flex w-11/12 items-center  justify-around max-xl:hidden  xl:flex-row">
        <Image
          className="rounded-full border-2 border-orange-500 shadow-xl"
          width={200}
          height={200}
          src={'/photoProfil.jpg'}
          alt="photo de profil"
        ></Image>
        <div className="h-2/3 w-1/2 px-4  font-bold text-gray-900 md:text-lg lg:text-xl xl:text-2xl  ">
          <div>
            <p> Orlandini Sébastien</p>
            <p>
              Développeur{' '}
              <span className={`${styles.cursor} text-red-300`}> {name}</span>
            </p>
            <div className="md:text-md text-gray-600 lg:text-lg xl:text-xl  ">
              En recherche d&apos;opportunité
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
            className="mr-4 rounded-full border-2 border-orange-500 shadow-xl"
            width={100}
            height={100}
            src={'/photoProfil.jpg'}
            alt="photo de profil"
          ></Image>
          <div>
            <p> Orlandini Sébastien</p>
            <p>
              Développeur{' '}
              <span className={`${styles.cursor} text-red-300`}> {name}</span>
            </p>{' '}
            <div className="md:text-md text-gray-600 lg:text-lg xl:text-xl  ">
              En recherche d&apos;opportunité
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

      <div className="flex w-full flex-col items-center justify-center">
        <div className=" w-full text-center text-xl font-bold md:mt-20 ">
          Mes qualités
        </div>
        <div className="h-1 w-11/12 bg-orange-100 max-md:mb-10 md:mb-20 ">
          {' '}
        </div>
        <div className="my-2 ">
          <Qualite />
        </div>
      </div>
    </main>
  )
}
