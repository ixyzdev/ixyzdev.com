import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })
const playfair = Cormorant_Garamond({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const BASE_URL = 'https://ixyzdev.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Kevin Díaz — Ingeniero Civil Informático',
    template: '%s — Kevin Díaz',
  },
  description:
    'Portfolio de Kevin Díaz Cantillano. Ingeniería de software, arquitectura DDD/hexagonal, DevOps, CI/CD y desarrollo full stack con Next.js, NestJS y Docker.',
  authors: [{ name: 'Kevin Díaz', url: BASE_URL }],
  creator: 'Kevin Díaz',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: BASE_URL,
    siteName: 'Kevin Díaz',
    title: 'Kevin Díaz — Ingeniero Civil Informático',
    description:
      'Portfolio de Kevin Díaz Cantillano. Arquitectura de software, DevOps y desarrollo full stack.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kevin Díaz — Ingeniero Civil Informático',
    description:
      'Portfolio de Kevin Díaz Cantillano. Arquitectura de software, DevOps y desarrollo full stack.',
    creator: '@ixyzdev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
