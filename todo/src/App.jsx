import './App.css'
import Home from './pages/Home'
import Planning from './pages/Planning'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/planning' element={<Planning />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
