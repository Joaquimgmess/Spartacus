import type { Metadata } from 'next'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Spartacus',
  description: 'Spartacus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen bg-neutral-900'>
        <header className='flex justify-center overflow-hidden'>
          <Link href={'/'}>
            <Image src='/images/image.png' alt='Spartacus' width={200} height={200} className='my-4'></Image>
          </Link>
        </header>
        <main className='flex-grow'>
          {children}
        </main>
        <footer className='flex flex-col py-4 bg-neutral-900 text-neutral-300 overflow-hidden'>
          <h1 className='text-neutral-400 font-bold text-2xl'>
            Spartacus Brewing
          </h1>
          <span className='text-neutral-300 font-light text-base'>
            &copy; Cervejaria Spartacus Ltda - CNPJ: 29.419.392/0001-00
          </span>
        </footer>
      </body>
    </html>
  )
}
