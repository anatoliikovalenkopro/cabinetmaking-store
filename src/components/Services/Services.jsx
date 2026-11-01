import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceCard from './ServiceCard';
import { categories, services } from '../../data/services';
import './Services.css';

export default function Services() {
  const [active, setActive] = useState('all');

  const visible = active === 'all' ? services : services.filter((s) => s.category === active);
  const tagFor = (id) => categories.find((c) => c.id === id)?.tag;

  return (
    <section id="services">
      <div className="wrap">
        <SectionHeader
          eyebrow="What we build"
          title="Services for every room — and every business"
          lead="From a single vanity to a full home millwork package, we handle design, fabrication, finishing and installation under one roof."
        />

        <div className="services__filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`services__filter ${active === cat.id ? 'services__filter--active' : ''}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="services__grid">
          {visible.map((service) => (
            <ServiceCard key={service.title} {...service} tag={tagFor(service.category)} />
          ))}
        </div>
      </div>
    </section>
  );
}
