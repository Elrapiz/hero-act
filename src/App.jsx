import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero'
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </>
}

export default App;