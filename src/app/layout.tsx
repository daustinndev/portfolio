import { cn } from '@libs'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daustinn | Software Engineer & Music Producer',
  description: 'Daustinn or David - Web Development',
  icons: {
    icon: '/avatar-square.png'
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/projects/portfolio.png"></meta>
      </head>
      <body
        className={cn('bg-[--body-background] scroll-smooth', inter.className)}
      >
        {children}
      </body>
    </html>
  )
}
