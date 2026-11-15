
import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section work-section" id="work">
      <div className="wrap">
        <Reveal>
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                01 / SELECTED WORK
              </div>
              <h2>
                Made to <em>matter.</em>
              </h2>
            </div>

            <p>
              A selection of digital products and
              experiences I've worked on.
            </p>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((project, i) => (
            <Reveal key={project.index} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
