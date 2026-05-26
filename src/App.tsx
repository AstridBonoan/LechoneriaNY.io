import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import SignatureDishes from './components/SignatureDishes'
import Atmosphere from './components/Atmosphere'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <SignatureDishes />
        <Atmosphere />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
