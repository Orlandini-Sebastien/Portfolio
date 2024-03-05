import { ReactElement } from 'react'

type IframProps = {
  title: string
}

const TitleProgress = ({ title }: IframProps): ReactElement => {
  return (
    <div className="my-4 rounded border-b-2 bg-slate-50 p-2 text-3xl shadow">
    {title}
  </div>
  )
}

export default TitleProgress