import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MSNeuro - Neuroscience Hub',
  description: 'Your comprehensive resource for Neuroscience, Brain-Computer Interfaces, and EEG Data Processing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
