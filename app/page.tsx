import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://agiftforyouuu.vercel.app'),
  title: 'عيد ميلاد سعيد لأحمد! 🎂',
  description: 'رسالة عيد ميلاد خاصة لأحمد 🤍',
  openGraph: {
    title: 'عيد ميلاد سعيد لأحمد! 🎂',
    description: 'رسالة عيد ميلاد خاصة لأحمد 🤍',
    url: 'https://agiftforyouuu.vercel.app',
    siteName: 'هدية عيد ميلاد',
    type: 'website',
    images: [
      {
        url: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'قطة تهنئ أحمد بعيد ميلاده 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'عيد ميلاد سعيد لأحمد! 🎂',
    description: 'رسالة عيد ميلاد خاصة لأحمد 🤍',
    images: ['https://agiftforyouuu.vercel.app/images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}