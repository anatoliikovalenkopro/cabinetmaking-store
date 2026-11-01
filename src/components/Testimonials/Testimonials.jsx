import SectionHeader from '../SectionHeader/SectionHeader';
import { testimonials } from '../../data/content';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section>
      <div className="wrap">
        <SectionHeader
          center
          eyebrow="Client stories"
          title="What homeowners say"
          lead="Sample reviews — replace with your real Google reviews."
        />
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <blockquote className="testimonial reveal" key={t.project}>
              <div className="testimonial__stars">★★★★★</div>
              <p>“{t.text}”</p>
              <cite>
                {t.name}
                <small>{t.project}</small>
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
