import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import giftData from '@/lib/giftData'
import GiftClient from '@/components/GiftClient'

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return { title: 'الهدية غير موجودة' }
  
  return {
    title: `عيد ميلاد سعيد لـ${data.receiverName}! 🎂`,
    description: `رسالة عيد ميلاد خاصة لـ${data.receiverName} 🤍`,
    openGraph: {
      title: `عيد ميلاد سعيد لـ${data.receiverName}! 🎂`,
      description: `رسالة عيد ميلاد خاصة لـ${data.receiverName} 🤍`,
      url: `https://agiftforyouuu.vercel.app/gift/${params.id.toLowerCase()}`,
      siteName: 'هدية عيد ميلاد',
      type: 'website',
      images: [
        {
          url: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
          secureUrl: 'https://agiftforyouuu.vercel.app/images/og-cat.jpg',
          width: 1200,
          height: 630,
          type: 'image/jpeg',
          alt: `تهنئة عيد ميلاد لـ${data.receiverName} 🐱🎂`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `عيد ميلاد سعيد لـ${data.receiverName}! 🎂`,
      description: `رسالة عيد ميلاد خاصة لـ${data.receiverName} 🤍`,
      images: ['https://agiftforyouuu.vercel.app/images/og-cat.jpg'],
    },
  }
}

export default function GiftPage({ params }: { params: { id: string } }) {
  const data = giftData[params.id.toLowerCase()]
  if (!data) return notFound()
  
  return <GiftClient data={data} />
}
