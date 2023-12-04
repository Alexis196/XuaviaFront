import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Carousel from './components/carousel/Carrousel'
import Recomendaciones from './components/recomendaciones/Recommendations'
import Footer from './components/footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Carousel/>
      <Recomendaciones/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
