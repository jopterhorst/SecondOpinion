import Navigation from '@/components/Navigation'
import CastCrewSection from '@/components/CastCrewSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Cast & Crew | Second Opinion - Upstream Kerstmusical",
  description: "Ontmoet de getalenteerde cast en crew die Second Opinion tot leven brengen. Ontdek de personages en de mensen achter deze transformerende kerstmusical.",
}

export default function CastCrewPage() {
  return (
    <main>
      <Navigation />
      <CastCrewSection />
      <Footer />
    </main>
  )
}
