import { useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return <section className="hero wrap">
    <div className="hero-copy"><Reveal>
      <div className="eyebrow"><span className="line"/> FRONTEND DEVELOPER · CREATIVE THINKER</div>
      <h1>I turn ideas into <em>digital experiences.</em></h1>
      <p className="hero-description">I'm <strong>Temitope Matuluko</strong>, a software developer building thoughtful interfaces and exploring how AI and automation can solve real problems.</p>
      <div className="actions"><a className="btn primary" href="#work">Explore my work <ArrowUpRight size={18}/></a><a className="btn secondary" href="#contact">Let's connect <ArrowUpRight size={18}/></a></div>
    </Reveal></div>
    <Reveal className="hero-art" delay={0.15}>
      <div className="portrait-frame"><div className="portrait-glow"/>
        {!photoFailed ? <img src="/portrait.jpeg" alt="Portrait of Temitope Matuluko" onError={() => setPhotoFailed(true)}/> : <div className="portrait-placeholder" style={{display:'flex'}}><span>YOUR<br/>PORTRAIT<br/>HERE</span><small>Add public/portrait.jpeg</small></div>}
        <span className="portrait-label">DESIGN × DEVELOPMENT</span>
      </div><div className="floating-tag">&lt;code /&gt; + curiosity ✳</div>
    </Reveal>
    <a className="scroll-note" href="#work">SCROLL TO EXPLORE <ArrowDown size={15}/></a>
  </section>;
}
