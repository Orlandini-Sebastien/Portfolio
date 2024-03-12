type CarouselTitleProps = {
  title: string
}

const CarouselTitle = ({ title }: CarouselTitleProps) => {
  return (
    <h3 className="flex self-start  text-md p-4 font-bold md:text-lg lg:text-xl xl:text-2xl ">
      {title}
    </h3>
  )
}

export default CarouselTitle
