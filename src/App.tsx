import Navbar from './components/Navbar'
import Hero from './components/Hero'
import InfoBar from './components/InfoBar'
import Highlights from './components/Highlights'
import About from './components/About'
import MenuPreview from './components/MenuPreview'
import Atmosphere from './components/Atmosphere'
import Location from './components/Location'
import Footer from './components/Footer'
import WatermarkBackground from './components/WatermarkBackground'

function App() {
  return (
    <>
      <WatermarkBackground />
      <Navbar />
      <main>
        <Hero />
        <InfoBar />
        <Highlights />
        <About />
        <MenuPreview />
        <Atmosphere />
        <Location />
      </main>
      <Footer />
    </>
  )
}

export default App
