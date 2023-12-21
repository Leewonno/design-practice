import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design Practice',
  description: 'Leewonno Design Practice Space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
