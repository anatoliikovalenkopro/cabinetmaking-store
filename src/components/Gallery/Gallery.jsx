import SectionHeader from '../SectionHeader/SectionHeader';
import { projects } from '../../data/content';
import './Gallery.css';

export default function Gallery() {
  return (
    <section id="work" className="gallery">
      <div className="wrap">
        <SectionHeader
          eyebrow="Recent projects"
          title="Our work"
          lead="Replace these panels with your project photos."
        />
        <div className="gallery__grid">
          {projects.map((project) => {
            const classes = [
              'gallery__item',
              'reveal',
              'wood',
              project.wood,
              project.size && `gallery__item--${project.size}`,
              project.light && 'gallery__item--light',
            ].filter(Boolean).join(' ');

            return (
              <figure key={project.title} className={classes}>
                <figcaption>
                  {project.title}
                  <small>{project.meta}</small>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
