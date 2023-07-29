import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='overflow-hidden'>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}