import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "testing",
  description: 'Personal brand portfolio of Kaneika, a skincare enthusiast and freelancer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

