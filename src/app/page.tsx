import HeroSection from '@/components/home/HeroSection'
import FeaturedSection from '@/components/home/FeaturedSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import RegionsSection from '@/components/home/RegionsSection'
import StatsSection from '@/components/home/StatsSection'
import WeatherSection from '@/components/home/WeatherSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <RegionsSection />
      <StatsSection />
      <WeatherSection />
      <CTASection />
    </>
  )
}
