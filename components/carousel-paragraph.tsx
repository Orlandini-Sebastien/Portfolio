type CarouselParagraphProps = {
  paragraph: string
}

const CarouselParagraph = ({ paragraph }: CarouselParagraphProps) => {
  return <h3 className="p-4  md:text-md lg:text-lg xl:text-xl  italic">{paragraph}</h3>
}

export default CarouselParagraph
