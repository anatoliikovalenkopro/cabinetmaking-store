import SectionHeader from '../SectionHeader/SectionHeader';
import { albertaPoints, cities } from '../../data/content';
import './Alberta.css';

export default function Alberta() {
  return (
    <section className="alberta" id="areas">
      <div className="wrap alberta__grid">
        <div className="reveal">
          <SectionHeader
            eyebrow="Built for Alberta"
            title="Made here, for the way Albertans live"
            lead="Dry winters, chinook swings and long snowy seasons are hard on woodwork. We build with that in mind."
          />
          <div className="alberta__cities">
            {cities.map((city) => (
              <span key={city}>{city}</span>
            ))}
          </div>
        </div>

        <div className="alberta__points">
          {albertaPoints.map((point) => (
            <div className="alberta__point reveal" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
