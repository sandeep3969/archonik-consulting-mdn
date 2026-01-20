import { useState } from 'react';

export default function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);

  const go = p => {
    setPage(p);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="logo">ARCHONIK</div>

        <button className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <button className={page === 'home' ? 'active' : ''} onClick={() => go('home')}>Home</button>
          <button className={page === 'about' ? 'active' : ''} onClick={() => go('about')}>About</button>
          <button className={page === 'services' ? 'active' : ''} onClick={() => go('services')}>Services</button>
          <button className={page === 'contact' ? 'active' : ''} onClick={() => go('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
