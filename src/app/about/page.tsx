import { Metadata } from 'next'
import OverOnsContent from './OverOnsContent'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Over Ons - Upstream | Second Opinion Musical',
  description: 'Leer meer over Upstream, het evangelisatie-initiatief achter Second Opinion. Ontdek onze missie om hoop en genezing te brengen door Gods liefde.',
  openGraph: {
    title: 'Over Ons - Upstream',
    description: 'Leer meer over Upstream, het evangelisatie-initiatief achter Second Opinion.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function OverOnsPage() {
  return (
    <main>
      <Navigation />
      <OverOnsContent />
      <Footer />
    </main>
  )
}