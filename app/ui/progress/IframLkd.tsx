import { ReactElement } from 'react'

type IframProps = {
  src: string
  title: string
}

const IframLkd = ({ src, title }: IframProps): ReactElement => {
  return (
    <iframe
      className="shrink-0 max-md:h-[500px] max-md:w-full  md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]"
      src={src}
      title={title}
    ></iframe>
  )
}

export default IframLkd
