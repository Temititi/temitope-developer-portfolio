import { Workflow, Sparkles, Code2 } from 'lucide-react';
import Reveal from './Reveal';
const topics = [
  { number: '01', Icon: Workflow, title: 'Automation workflows', description: 'Learning to connect tools and reduce repetitive tasks through thoughtful automation.', status: 'CURRENT INTEREST' },
  { number: '02', Icon: Sparkles, title: 'AI-powered products', description: 'Exploring how AI can enhance real products and make everyday experiences more useful.', status: 'CURRENT INTEREST' },
  { number: '03', Icon: Code2, title: 'Creative frontend', description: 'Building interfaces that feel intuitive, accessible, responsive, and memorable.', status: 'ONGOING PRACTICE' },
];
export default function Explorations() {
  return <section className="section explore-section" id="explore"><div className="wrap">
    <Reveal><div className="eyebrow">03 / WHAT I'M EXPLORING</div><h2>Always <em>building forward.</em></h2><p className="explore-intro">The next chapter of my development journey is about connecting good software with smarter workflows.</p></Reveal>
    <div className="explore-grid">{topics.map((topic, i) => <Reveal key={topic.number} delay={i * 0.1}><div className="explore-card"><topic.Icon size={30}/><span className="card-number">{topic.number}</span><h3>{topic.title}</h3><p>{topic.description}</p><span className="learning">{topic.status}</span></div></Reveal>)}</div>
  </div></section>;
}
