import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Country quizz',
  description: 'This is a web application where you can test your knowledge about the countries',
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
