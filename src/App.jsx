import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero'
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ShowBlog from './pages/ShowBlog';

const App = () => {
  return <>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/ojt/:id' element={<ShowBlog />} />
    </Routes>
  </>
}

export default App;