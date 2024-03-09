import { ReactElement } from 'react'
import TitleProgress from './TitleProgress'
import IframLkd from './IframLkd'
import data from '../../../public/dataProgress.json'


const BlocProgress = (): ReactElement => {
  return (
    <section>
      {data.map((project, index) => {
        return (
          <>
            <TitleProgress title={project.title} key={index} />
            <div className="flex gap-8 overflow-x-scroll rounded-2xl border bg-slate-50 p-4 shadow-xl">
              {project.iframs.map((ifram, index) => {
                return (
                  <IframLkd key={index} src={ifram.src} title={ifram.title} />
                )
              })}
            </div>
          </>
        )
      })}
    </section>
  )
}

export default BlocProgress
