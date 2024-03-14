import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import SideNav from '@/app/ui/home/sidenav'
const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({
  weight: ['400', '700', '800', '900', '1000'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Orlandini Sebastien Développeur Reactjs et Nextjs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">

      <body className={`${nunito.className} antialiased`}>
        <div className="flex h-screen  flex-col md:flex-row md:overflow-hidden">
          <div className="w-full bg-orange-100 shadow-orange-300  max-md:shadow-lg md:w-48 md:shadow-2xl  ">
            <SideNav />
          </div>
          <main className="flex-grow bg-amber-50 p-6 md:overflow-y-auto md:p-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
