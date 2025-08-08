import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import GalleryContent from './GalleryContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Galerij - Second Opinion | Upstream Kerstmusical',
  description: 'Bekijk foto\'s en video\'s van Second Opinion kerstmusical, achter de schermen beelden, en indrukken van vorige Upstream evenementen.',
  openGraph: {
    title: 'Galerij - Second Opinion | Upstream Kerstmusical',
    description: 'Bekijk foto\'s en video\'s van Second Opinion kerstmusical, achter de schermen beelden, en indrukken van vorige Upstream evenementen.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function GalleryPage() {
  return (
    <main>
      <Navigation />
      <GalleryContent />
      <Footer />
    </main>
  )
}
