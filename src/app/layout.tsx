import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { ToastProvider } from '@/contexts/ToastContext'
import { QueryProvider } from '@/providers/QueryProvider'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata = {
  title: 'Testovoe',
  description: 'Next.js приложение с адаптивным дизайном и семантической разметкой',
  keywords: 'Next.js, React, TypeScript, адаптивный дизайн',
  authors: [{ name: 'Nikita' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider>
            <ToastProvider>
              <div className="app-container">
                <Sidebar />
                <div className="main-content">
                  {children}
                </div>
              </div>
            </ToastProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
