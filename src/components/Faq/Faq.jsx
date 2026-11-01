import { useState } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { faqs } from '../../data/content';
import './Faq.css';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="faq">
      <div className="wrap">
        <SectionHeader center eyebrow="FAQ" title="Good questions" />
        <div className="faq__list">
          {faqs.map((item, i) => (
            <div className={`faq__item ${openIndex === i ? 'faq__item--open' : ''}`} key={item.q}>
              <button className="faq__question" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                {item.q}
                <span className="faq__icon">+</span>
              </button>
              {openIndex === i && <p className="faq__answer">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
