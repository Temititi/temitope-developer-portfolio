import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Explorations from './components/Explorations';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App() {
  return <div className="app"><Navbar/><main id="top"><Hero/><Projects/><About/><Explorations/><Contact/></main><Footer/></div>;
}
