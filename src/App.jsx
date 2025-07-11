import './App.css'
import Contact from './pages/Contact/Contact'
import OurClients from './pages/OurClients/OurClients'
import OurServices from './pages/OurServices/OurServices'
import OurWorks from './pages/OurWorks/OurWorks'
import SectionFive from './pages/SectionFive/SectonFive'
import SectionOne from './pages/SectionOne/SectionOne'
import SectionTwo from './pages/SectionTwo/SectionTwo'

function App() {
  return (
    <>
    <SectionOne/>
    <SectionTwo/>
    <OurServices/>
    <OurWorks/>
    <SectionFive/>
    <OurClients/>
    <Contact/>
    </>
  )
}

export default App
