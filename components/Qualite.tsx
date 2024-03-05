import React, { useState } from 'react'

const TextCarousel: React.FC = () => {
  const [currentParagraph, setCurrentParagraph] = useState<number>(0)

  const fparagraphs = () => {
    const array = []
    for (let i = 0; i < paragraphs.length; i++) {
      array.push(
        <p
          className={`lg:text-md absolute flex  items-center justify-center rounded-full border-2 bg-amber-50 p-14 text-center text-orange-400 shadow-xl transition-opacity duration-500 max-lg:h-72 max-lg:w-72 max-lg:text-xs lg:h-96 lg:w-96 ${
            currentParagraph === i ? 'opacity-100' : 'opacity-0 '
          }`}
        >
          {paragraphs[i]}
        </p>,
      )
    }
    return array
  }

  const paragraphs: string[] = [
    "Ce que j'apprécie dans le développement React, c'est la liberté qu'il offre pour exprimer ma créativité et explorer de nouvelles idées sans limites.",
    'Je suis adaptable, capable de comprendre les besoins individuels de chaque projet et de proposer des solutions efficaces.',
    'La communication claire et concise favorise une collaboration fluide avec mes collègues, tout en respectant les délais impartis.',
    "Je suis réceptif aux feedbacks et je m'efforce de m'améliorer continuellement après chaque projet.",
    "La créativité est au cœur de mon travail, chaque tâche étant une opportunité d'innover et de repousser les limites.",
    'Je suis autonome dans la planification et la gestion de projets sur le long terme, garantissant ainsi des livraisons de qualité dans les délais.',
  ]

  return (
    <div className="relative mb-20  max-lg:h-72 max-lg:w-72 lg:h-96 lg:w-96">
      {fparagraphs()}

      <button
        className={` ${
          currentParagraph === 0 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
        } absolute left-1/2 top-0 h-28 w-28   -translate-x-1/2  -translate-y-1/2 transform rounded-full border shadow-xl hover:bg-amber-50 hover:text-orange-400 max-lg:h-20 max-lg:w-20 max-lg:text-xs `}
        onClick={() => setCurrentParagraph(0)}
      >
        Passionné
      </button>
      <button
        className={` ${
          currentParagraph === 1 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
        } absolute left-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform rounded-full border shadow-xl hover:bg-amber-50 hover:text-orange-400 max-lg:h-20 max-lg:w-20 max-lg:text-xs max-md:-bottom-20 md:-bottom-24 `}
        onClick={() => setCurrentParagraph(1)}
      >
        Adaptable
      </button>
      <button
        className={` ${
          currentParagraph === 2 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
        } absolute left-8 top-1/4 h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform rounded-full border shadow-xl hover:bg-amber-50  hover:text-orange-400 max-lg:h-20 max-lg:w-20 max-lg:text-xs`}
        onClick={() => setCurrentParagraph(2)}
      >
        Communicatif
      </button>
      <button
        className={` ${
          currentParagraph === 3 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
        } absolute left-8 top-3/4 h-28   w-28  -translate-x-1/2  -translate-y-1/2 transform rounded-full border shadow-xl hover:bg-amber-50  hover:text-orange-400 max-lg:h-20 max-lg:w-20 max-lg:text-xs`}
        onClick={() => setCurrentParagraph(3)}
      >
        Réceptif
      </button>
      <button
        className={` ${
          currentParagraph === 4 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
        } absolute  top-1/4 h-28 w-28 -translate-x-1/2  -translate-y-1/2  transform rounded-full border shadow-xl hover:bg-amber-50 hover:text-orange-400 max-lg:h-20  max-lg:w-20 max-lg:text-xs max-md:-right-14 md:-right-20`}
        onClick={() => setCurrentParagraph(4)}
      >
        Créatif
      </button>
      <button
        className={` ${
          currentParagraph === 5 ? 'bg-amber-50 text-orange-400' : 'bg-gray-50'
        } absolute top-3/4 h-28 w-28 -translate-x-1/2 -translate-y-1/2 transform  rounded-full border  shadow-xl hover:bg-amber-50 hover:text-orange-400 max-lg:h-20  max-lg:w-20 max-lg:text-xs max-md:-right-16 md:-right-20`}
        onClick={() => setCurrentParagraph(5)}
      >
        Autonome
      </button>
    </div>
  )
}

export default TextCarousel
