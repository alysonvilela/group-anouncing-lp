import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const monaSans = localFont({
  src: '../fonts/obviously-narrow-black.woff2',
  display: 'swap',
  variable: '--font-obviously',
  weight: '200 900',
})

export const metadata: Metadata = {
  title: 'Promoções Exclusivas - Mercado Livre, Amazon e Shopee',
  description:
    'Receba as melhores ofertas do Mercado Livre, Amazon e Shopee direto no WhatsApp. Pare de perder promoções e economize em cada compra sem precisar ficar procurando.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full antialiased', inter.variable, monaSans.variable)}
      suppressHydrationWarning
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-395441137"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'AW-395441137');
						`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
