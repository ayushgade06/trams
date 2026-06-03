import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feature1 from './components/Feature1'
import Feature2 from './components/Feature2'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navbar />
      <Hero />
      <Feature1 />
      <Feature2 />
      <Services />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
