import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project: p }) {
  return (
    <article className="project">
      <a href={p.url} target="_blank" rel="noopener noreferrer" className={'project-visual ' + p.visual} aria-label={'View ' + p.name + ' live'}>
        <div className="project-browser">
          <div className="project-browser-top"><span className="window-dots"><i/><i/><i/></span><span className="browser-url">{p.url.replace('https://', '')}</span></div>
          <img className="project-screenshot" src={p.image} alt={`${p.name} homepage screenshot`} loading="lazy" />
        </div>
        <span className="project-visual-arrow"><ArrowUpRight /></span>
      </a>
      <div className="project-details">
        <span className="project-index">{p.index} / {p.category}</span>
        <h3>{p.name}</h3><p>{p.summary}</p>
        <div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">View live project <ArrowUpRight size={17}/></a>
      </div>
    </article>
  );
}
