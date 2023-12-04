import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Layout/Index'
import Services from './Layout/Services'
import Us from './Layout/Us'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<Us />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
