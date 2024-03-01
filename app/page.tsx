'use client';
import Image from 'next/image';
import useTypewriter from 'react-typewriter-hook';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Cursor.module.css';
import Qualite from './components/Qualite';

const MagicOcean: string[] = [' React', ' Frontend', ' Backend'];
let index: number = 0;
export default function Home(): JSX.Element {
	const [magicName, setMagicName] = useState<string>(' Full-Stack');
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	const name = useTypewriter(magicName);
	const location = { lat: 48.8566, lng: 2.3522 };

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			index = index > 2 ? 0 : ++index;
			setMagicName(MagicOcean[index]);
		}, 5000);
		return () => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
		};
	}, [magicName]);

	return (
		<main className=" flex min-h-screen flex-col items-center bg-slate-50 shadow-xl">
			<div className="w-11/12 flex max-xl:hidden xl:flex-row  items-center justify-around  my-4">
				<Image
					className="rounded-full border-2 border-orange-500 shadow-xl"
					width={200}
					height={200}
					src={'/photoProfil.jpg'}
					alt="photo de profil"
				></Image>
				<div className="text-gray-900 md:text-lg lg:text-xl  xl:text-2xl font-bold h-2/3 w-1/2 px-4  ">
					<div>
						<p> Orlandini Sébastien</p>
						<p>
							Développeur{' '}
							<span className={`${styles.cursor} text-red-300`}> {name}</span>
						</p>
						<div className="md:text-md lg:text-lg xl:text-xl text-gray-600  ">
							En recherche d&apos;opportunité
						</div>
					</div>
					<div className="text-gray-400 text-right xl:text-xl italic lg:text-lg md-text-md">
						<div>entre Luxembourg et Nancy</div>
						<div>ou en full-remote</div>
					</div>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46193.85233993836!2d6.146763710673335!3d49.10508885509453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b6074b6a9%3A0x596be4b635bba669!2sMetz!5e0!3m2!1sfr!2sfr!4v1709292302569!5m2!1sfr!2sfr"
					width="300"
					height="300"
					className="border-2 rounded-3xl border-orange-500 shadow-xl"
					loading="lazy"
				></iframe>
			</div>

			<div className="w-11/12 flex xl:hidden max-xl:flex-col my-4">
				<div className="text-gray-900 md:text-lg lg:text-xl  xl:text-2xl font-bold h-2/3 px-4 flex md:justify-start max-md:justify-center items-center w-full   ">
					<Image
						className="rounded-full border-2 border-orange-500 shadow-xl mr-4"
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
						<div className="md:text-md lg:text-lg xl:text-xl text-gray-600  ">
							En recherche d&apos;opportunité
						</div>
					</div>
				</div>
				<div className="flex max-md:flex-col  w-full justify-end items-center">
					<div className="text-gray-900 md:text-lg lg:text-xl  xl:text-2xl font-bold h-2/3 w-1/2 px-4 max-md:w-full  ">
						<div className="text-gray-400 md:text-right xl:text-xl italic lg:text-lg md:text-md max-md:w-full max-md:text-center max-md:my-2">
							<div>entre Luxembourg et Nancy</div>
							<div> ou en full-remote</div>
						</div>
					</div>
					<div className='h-[300px] w-[300px] border-2 rounded-3xl border-orange-500 shadow-xl overflow-hidden'>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46193.85233993836!2d6.146763710673335!3d49.10508885509453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794dc1b6074b6a9%3A0x596be4b635bba669!2sMetz!5e0!3m2!1sfr!2sfr!4v1709292302569!5m2!1sfr!2sfr"
							width="300"
							height="300"
							
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center w-full">
				<div className=" text-xl font-bold w-full text-center md:mt-20">
					Mes qualités
				</div>
				<div className="h-1 bg-orange-100 w-11/12 max-md:mb-10 md:mb-20"> </div>
				<div>
					<Qualite />
				</div>
			</div>
		</main>
	);
}
