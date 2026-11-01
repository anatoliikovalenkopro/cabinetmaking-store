import SectionHeader from '../SectionHeader/SectionHeader';
import { tableFeatures, woodSpecies } from '../../data/content';
import './Tables.css';

export default function Tables() {
  return (
    <section className="tables" id="tables">
      <div className="wrap tables__grid">
        <div className="reveal">
          <SectionHeader
            light
            eyebrow="Signature work"
            title="Handcrafted tables built to outlast us all"
            lead="Dining tables, live-edge slabs, boardroom tables and coffee tables — each one built to order in the size, species and finish you choose."
          />
          <ul className="tables__checks">
            {tableFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="tables__species">
            {woodSpecies.map((wood) => (
              <span key={wood.name}>
                <i className={`wood ${wood.className}`} />
                {wood.name}
              </span>
            ))}
          </div>
        </div>

        <div className="tables__art reveal">
          <div className="wood wood--walnut" />
          <div className="wood wood--oak" />
          <div className="wood wood--cherry" />
        </div>
      </div>
    </section>
  );
}
