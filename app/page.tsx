import HeroContainer from '@/components/containers/HeroContainer'
import ServicesContainer from '@/components/containers/ServicesContainer'
import TrustContainer from '@/components/containers/TrustContainer'
import FAQContainer from '@/components/containers/FAQContainer'

export default function HomePage() {
  return (
    <>
      <HeroContainer />
      <ServicesContainer />
      <TrustContainer />
      <FAQContainer />
    </>
  )
}
