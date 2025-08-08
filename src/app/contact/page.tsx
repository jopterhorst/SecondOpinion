import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import ContactContent from './ContactContent'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact - Second Opinion | Upstream Kerstmusical',
  description: 'Neem contact op voor vragen over Second Opinion kerstmusical of om meer te weten over Upstream evangelisatie-initiatief.',
  openGraph: {
    title: 'Contact - Second Opinion | Upstream Kerstmusical',
    description: 'Neem contact op voor vragen over Second Opinion kerstmusical of om meer te weten over Upstream evangelisatie-initiatief.',
    type: 'website',
    locale: 'nl_NL',
  },
}

export default function ContactPage() {
  return (
    <main>
      <Navigation />
      <ContactContent />
      <Footer />
    </main>
  )
}
