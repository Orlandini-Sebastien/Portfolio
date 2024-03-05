import IframLkd from '../ui/progress/IframLkd'
import TitleProgress from '../ui/progress/TitleProgress'
import BlocProgress from '../ui/progress/BlocProgress'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="flex w-11/12 flex-col">
        <BlocProgress />
      </div>
    </main>
  )
}
