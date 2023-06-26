import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-releway' })

export const metadata = {
  title: 'Rondom Quotes',
  description: 'Generated a random quote',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${raleway.variable} font-sans`}>{children}</body>
    </html>
  )
}
