import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Icon } from '~/assets/icon'
import { ReactQueryProvider } from '~/context/ReactQueryProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'About me',
  description: 'This content is about me'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <html lang='en' className='bg-primary-950 text-zinc-100'>
        <body className={inter.className}>
          <header className='h-12 bg-primary-800 flex items-center px-4 justify-between'>
            <nav className='flex gap-4'>
              <a>Home</a>
              <a>About</a>
            </nav>

            <Icon.User size={22} className='fill-white' />
          </header>

          {children}

          <footer className='h-20 flex items-center justify-center'>
            <span className='text-primary'>Inc</span>
          </footer>
        </body>
      </html>
    </ReactQueryProvider>
  )
}
