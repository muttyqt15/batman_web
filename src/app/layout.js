import { Inter, Kaushan_Script, Nova_Square , Shadows_Into_Light } from 'next/font/google'
import Navbar from '@/components/Navbar';
import batman from '../assets/batman.png';
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--inter' })
const kaushan = Kaushan_Script({ subsets: ['latin'], weight: ['400']})
const sil = Shadows_Into_Light({subsets: ['latin'], weight: '400'})
const nova = Nova_Square({subsets: ['latin'], weight: ['400']})

export const metadata = {
  title: 'Iseng'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={kaushan.className}>
        <Navbar logo={batman} font={nova.className} home="/" shop="/shop/" about="/about/" />
          {children}
        <Footer />
        </body>
    </html>
  )
}
