import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fruit Store',
  description: 'Best prices 24/7',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={"min-h-screen flex flex-col relative " + inter.className}>
        <header className='sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between'>
          <Link href={'/'}>
          <h1 className='text-black uppercase cursor-pointer hover:scale-125 '>Fruit Shop</h1>
          </Link>
         
          <i className='fa-solid fa-cart-shopping text-black hover:scale-105'></i>
        </header>
        <div className='flex-1'>
        {children}
        </div>
        </body>
    </html>
  )
}
