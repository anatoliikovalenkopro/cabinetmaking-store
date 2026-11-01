import { stats } from '../../data/company';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg wood wood--dark" />
      <div className="wrap hero__content">
        <span className="eyebrow eyebrow--light">Custom Cabinetmaking · Alberta</span>
        <h1>Built by hand.<br />Made for your home.</h1>
        <p className="hero__text">
          Custom kitchens, vanities, built-ins and heirloom tables — designed, built in our
          Alberta shop and installed by our own crew.
        </p>
        <div className="hero__actions">
          <a href="#quote" className="btn btn--primary">Get a Free Quote →</a>
          <a href="#work" className="btn btn--ghost">See Our Work</a>
        </div>
        <div className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              {stat.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
