import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const closeMenu = () => setMenu(false);
  return <header className="header wrap">
    <a className="logo" href="#top" aria-label="Home">TM<span className="accent">.</span></a>
    <nav className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
      <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#explore" onClick={closeMenu}>Explorations</a><a href="#contact" onClick={closeMenu}>Contact</a>
    </nav>
    <a className="availability" href="#contact"><span className="status-dot"/> Open to opportunities</a>
    <button className="mobile-toggle" type="button" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
  </header>;
}
