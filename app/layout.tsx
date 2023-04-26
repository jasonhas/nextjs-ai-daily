import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})
export const metadata = {
  title: 'A Next App to display daily AI Images',
  description: 'A fun and updated daily site of how to generate images with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
