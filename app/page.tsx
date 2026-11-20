import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export const metadata: Metadata = {
  metadataBase: new URL('https://happybirthdayamna-puce.vercel.app/'),
  title: 'happy birthday amna🎂',
  description: 'happy birthday amna🎂',
  openGraph: {
    title: 'happy birthday amna🎂',
    description: 'happy birthday amna🎂',
    url: 'https://happybirthdayamna-puce.vercel.app',
    siteName: 'هدية عيد ميلاد',
    type: 'website',
    images: [
      {
        url: 'https://happybirthdayamna-puce.vercel.app/images/og-cat.jpg',
        secureUrl: 'https://happybirthdayamna-puce.vercel.app/images/og-cat.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'قطة تهنئ أحمد بعيد ميلاده 🐱🎂',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'happy birthday amna🎂',
    description: 'happy birthday amna🎂',
    images: ['https://happybirthdayamna-puce.vercel.app/images/og-cat.jpg'],
  },
}

export default function Home() {
  const data = giftData.ahmed || giftData.amir
  return <GiftClient data={data} />
}