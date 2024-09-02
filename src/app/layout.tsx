import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/queries/providers'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix | Higor Code',
  description:
    'Assita filmes e séries com sua família no conforto de sua casa.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-BR' className='dark'>
      <body className={`${inter.className} flex flex-col min-h-dvh`}>
        <Providers>
          <Header />
          <main className='h-full mb-auto'>{children}</main>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  )
}
