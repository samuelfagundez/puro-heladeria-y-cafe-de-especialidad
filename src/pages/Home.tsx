import Seo from '../components/Seo'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Reviews from '../components/Reviews'
import Hours from '../components/Hours'
import LocationMap from '../components/LocationMap'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Reviews />
        <Hours />
        <LocationMap />
      </main>
      <Footer />
    </>
  )
}
