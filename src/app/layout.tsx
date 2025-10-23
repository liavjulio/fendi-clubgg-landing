import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fendi ClubGG - מועדון הפוקר המוביל בישראל',
  description: 'שחק פוקר אונליין על כסף אמיתי באפליקציית ClubGG. מועדון הפוקר המוביל בישראל עם יותר מ-200 שחקנים פעילים יומיים, בונוסים מטורפים וסוכנים זמינים 24/7.',
  keywords: 'פוקר, פוקר אונליין, ClubGG, טקסס הולדם, אומהה, פוקר ישראל, כסף אמיתי, טורנירים',
  authors: [{ name: 'Fendi ClubGG' }],
  creator: 'Fendi ClubGG',
  publisher: 'Fendi ClubGG',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: 'https://lasvegasclub.co.il',
    title: 'Fendi ClubGG - מועדון הפוקר המוביל בישראל',
    description: 'שחק פוקר אונליין על כסף אמיתי באפליקציית ClubGG. מועדון הפוקר המוביל בישראל עם בונוסים מטורפים וסוכנים זמינים 24/7.',
    siteName: 'Fendi ClubGG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fendi ClubGG - מועדון הפוקר המוביל בישראל',
    description: 'שחק פוקר אונליין על כסף אמיתי באפליקציית ClubGG עם בונוסים מטורפים.',
    creator: '@fendi_claubgg',
  },
}

import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preload" href="/images/fendi/Fendi_Club_Logo.png" as="image" />
        <link rel="preload" href="/images/fendi/img4.jpeg" as="image" />
        <link rel="preload" href="/images/fendi/img9.jpeg" as="image" />
        <link rel="preload" href="/images/fendi/img10.jpeg" as="image" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}