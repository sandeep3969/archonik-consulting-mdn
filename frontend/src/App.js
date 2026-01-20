import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [page, setPage] = useState('home');
  const [animating, setAnimating] = useState(false);

  const changePage = next => {
    if (next === page) return;
    setAnimating(true);
    setTimeout(() => {
      setPage(next);
      setAnimating(false);
      window.scrollTo(0, 0);
    }, 250);
  };

  return (
    <>
      <Navbar page={page} setPage={changePage} />

      <main className={`page-wrapper ${animating ? 'fade-out' : 'fade-in'}`}>
        {page === 'home' && <Home setPage={changePage} />}
        {page === 'about' && <About setPage={changePage} />}
        {page === 'services' && <Services setPage={changePage} />}
        {page === 'contact' && <Contact />}
      </main>

      

     <Footer setPage={changePage} />

    </>
  );
}
