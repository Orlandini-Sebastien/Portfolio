import React, { useState } from 'react';

const TextCarousel: React.FC = () => {
	const [currentParagraph, setCurrentParagraph] = useState<number>(0);

	const paragraphs: string[] = [
		"Ce que j'apprécie dans le développement React, c'est la liberté qu'il offre pour exprimer ma créativité et explorer de nouvelles idées sans limites.",
		'Je suis adaptable, capable de comprendre les besoins individuels de chaque projet et de proposer des solutions efficaces.',
		'La communication claire et concise favorise une collaboration fluide avec mes collègues, tout en respectant les délais impartis.',
		"Je suis réceptif aux feedbacks et je m'efforce de m'améliorer continuellement après chaque projet.",
		"La créativité est au cœur de mon travail, chaque tâche étant une opportunité d'innover et de repousser les limites.",
		'Je suis autonome dans la planification et la gestion de projets sur le long terme, garantissant ainsi des livraisons de qualité dans les délais.',
	];

	return (
		<div className="relative h-96 w-96 ">
			<p
				className={`absolute h-96 w-96 border-2 rounded-full shadow-xl flex justify-center items-center p-14 text-center bg-amber-50 text-orange-400 transition-opacity duration-500 ${
					currentParagraph === 0 ? 'opacity-100' : 'opacity-0 '
				}`}
			>
				{paragraphs[0]}
			</p>

			<p
				className={` absolute h-96 w-96 border-2 rounded-full shadow-xl flex justify-center items-center p-14 text-center bg-amber-50 text-orange-400 transition-opacity duration-500 ${
					currentParagraph === 1 ? 'opacity-100' : 'opacity-0'
				}`}
			>
				{paragraphs[1]}
			</p>

			<p
				className={`absolute h-96 w-96 border-2 rounded-full shadow-xl flex justify-center items-center p-14 text-center bg-amber-50 text-orange-400 transition-opacity duration-500 ${
					currentParagraph === 2 ? 'opacity-100' : 'opacity-0 '
				}`}
			>
				{paragraphs[2]}
			</p>

			<p
				className={` absolute h-96 w-96 border-2 rounded-full shadow-xl flex justify-center items-center p-14 text-center bg-amber-50 text-orange-400 transition-opacity duration-500 ${
					currentParagraph === 3 ? 'opacity-100' : 'opacity-0 '
				}`}
			>
				{paragraphs[3]}
			</p>

			<p
				className={`absolute h-96 w-96 border-2 rounded-full shadow-xl flex justify-center items-center p-14 text-center bg-amber-50 text-orange-400 transition-opacity duration-500 ${
					currentParagraph === 4 ? 'opacity-100' : 'opacity-0 '
				}`}
			>
				{paragraphs[4]}
			</p>

			<p
				className={`absolute h-96 w-96 border-2 rounded-full shadow-xl flex justify-center items-center p-14 text-center bg-amber-50 text-orange-400 transition-opacity duration-500 ${
					currentParagraph === 5 ? 'opacity-100' : 'opacity-0 '
				}`}
			>
				{paragraphs[5]}
			</p>

			<button
				className={` ${
					currentParagraph === 0 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
				} absolute w-28  h-28  rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:bg-amber-50 hover:text-orange-400 border shadow-xl `}
				onClick={() => setCurrentParagraph(0)}
			>
				Passionné
			</button>
			<button
				className={` ${
					currentParagraph === 1 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
				} absolute  w-28  h-28 rounded-full -bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2  hover:bg-amber-50 hover:text-orange-400 border shadow-xl `}
				onClick={() => setCurrentParagraph(1)}
			>
				Adaptable
			</button>
			<button
				className={` ${
					currentParagraph === 2 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
				} absolute  w-28  h-28  rounded-full top-1/4 left-8 transform -translate-x-1/2 -translate-y-1/2  hover:bg-amber-50 hover:text-orange-400 border shadow-xl`}
				onClick={() => setCurrentParagraph(2)}
			>
				Communicatif
			</button>
			<button
				className={` ${
					currentParagraph === 3 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
				} absolute   w-28  h-28  rounded-full top-3/4 left-8 transform -translate-x-1/2 -translate-y-1/2  hover:bg-amber-50 hover:text-orange-400 border shadow-xl`}
				onClick={() => setCurrentParagraph(3)}
			>
				Réceptif
			</button>
			<button
				className={` ${
					currentParagraph === 4 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
				} absolute  w-28  h-28  rounded-full top-1/4 -right-20 transform -translate-x-1/2 -translate-y-1/2  hover:bg-amber-50 hover:text-orange-400 border shadow-xl`}
				onClick={() => setCurrentParagraph(4)}
			>
				Créatif
			</button>
			<button
				className={` ${
					currentParagraph === 5 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
				} absolute w-28 h-28  rounded-full top-3/4 -right-20 transform -translate-x-1/2 -translate-y-1/2  hover:bg-amber-50 hover:text-orange-400 border shadow-xl`}
				onClick={() => setCurrentParagraph(5)}
			>
				Autonome
			</button>
		</div>
	);
};

export default TextCarousel;
