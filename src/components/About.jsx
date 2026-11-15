import Reveal from './Reveal';
const skills = ['React', 'JavaScript', 'HTML & CSS', 'Git & GitHub', 'Responsive Design', 'Product Thinking'];
export default function About() {
  return <section className="section about-section" id="about"><div className="wrap about-grid">
    <Reveal><div className="eyebrow">02 / A LITTLE ABOUT ME</div><h2>Code is the tool.<br/><em>Impact is the goal.</em></h2></Reveal>
    <Reveal delay={0.1}><p>I'm a developer who enjoys turning complex ideas into clear, useful digital experiences. I bring a combination of frontend development, product thinking, and experience coordinating people and projects.</p><p>I'm especially curious about AI automation: how intelligent tools and well-designed workflows can make everyday work simpler and more effective.</p><div className="skill-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>
  </div></section>;
}
