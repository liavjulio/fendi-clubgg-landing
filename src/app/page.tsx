import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tutorial from '@/components/Tutorial'
import Features from '@/components/Features'
import Security from '@/components/Security'
import Bonuses from '@/components/Bonuses'
import Gallery from '@/components/Gallery'
import PaymentMethods from '@/components/PaymentMethods'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingActions from '@/components/FloatingActions'


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Tutorial />
      <Features />
      <Security />
      <PaymentMethods />
      <Bonuses />
      <Gallery />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingActions />
    </main>
  )
}