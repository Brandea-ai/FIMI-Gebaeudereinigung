import HeroContainer from './home/HeroContainer'
import TrustContainer from './home/TrustContainer'
import ServicesContainer from './home/ServicesContainer'
import ProcessContainer from './home/ProcessContainer'
import FAQContainer from './home/FAQContainer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroContainer />
      <TrustContainer />
      <ServicesContainer />
      <ProcessContainer />
      <FAQContainer />
    </main>
  )
}
