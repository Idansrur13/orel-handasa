import './App.css'
import Landing from './pages/landing'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './component/header'
import Footer from './component/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingcopy from './pages/landing copyy'
import AccessibilityWidget from './component/AccessibilityWidget'
import Watsappbutton from './component/Watsappbutton'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/landing' element={<Landingcopy />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
        <AccessibilityWidget />
        <Watsappbutton />
      </BrowserRouter>
    </>
  )
}

export default App
