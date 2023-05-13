import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

interface MetaData {
  title: string
  description: string
}

export const metadata: MetaData = {
  title: 'Serial Components',
  description: 'React Components for using web serial api',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
