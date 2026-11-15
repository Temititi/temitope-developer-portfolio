import { Mail } from 'lucide-react';
import Reveal from './Reveal';
export default function Contact() {
  return <section className="contact-section" id="contact"><div className="wrap"><Reveal>
    <div className="eyebrow">04 / GET IN TOUCH</div><h2>Have an idea?<br/><em>Let's make it real.</em></h2>
    <p>I'm open to software development opportunities, collaborations, and conversations about building better digital products.</p>
    <a className="btn primary" href="mailto:thaymithopemat@gmail.com">Send me an email <Mail size={18}/></a>
  </Reveal></div></section>;
}
