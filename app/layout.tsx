import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme/theme-provider'

import "tailwindcss/tailwind.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Mercedes-Benz Herbrand",
    template: "%s | Mercedes-Benz Herbrand",
  },
  description: "Ihr Partner für Mercedes-Benz Neu- & Gebrauchtwagen, Werkstattservice, Ersatzteile, Fahrzeugmiete u.v.m. am Niederrhein und im Westmünsterland."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={inter.className}
      >
        <head />
        <body className="min-h-full antialiased dark:bg-black bg-white">
          <ThemeProvider attribute="class" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
