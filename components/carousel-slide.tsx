import CarouselParagraph from './carousel-paragraph'
import CarouselTitle from './carousel-title'

type CarouselSlideProps = {
  title: string
  paragraph: string
}

const CarouselSlide = ({ title, paragraph }: CarouselSlideProps) => {
  return (
    <div className="flex h-60 flex-col items-center justify-between  rounded border-2 border-b-4 border-r-4 bg-amber-50 p-4  ">
      <CarouselTitle title={title} />
      <CarouselParagraph paragraph={paragraph} />
    </div>
  )
}

export default CarouselSlide
