import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mubashir Ali Portfolio',
  description: 'This is pofessional awesome portfolio, it showcase my skills, educations, projects and credentials',
  author: 'Mubashir Ali',
  keywords: [
    "Mubashir",
    "Mubashir Ali Portfolio",
    "mubashir-ali.vercel.app",
    "mubashirAlibalti",
    "Portfolio",
    "Mubashir Portfolio ",
    "Mubashir Ali website",
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
