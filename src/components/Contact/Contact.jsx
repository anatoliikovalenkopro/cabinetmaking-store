import SectionHeader from '../SectionHeader/SectionHeader';
import QuoteForm from './QuoteForm';
import Icon from '../Icon/Icon';
import { company } from '../../data/company';
import './Contact.css';

const contactItems = [
  { icon: 'phone', title: company.phone, text: company.hours, href: company.phoneHref },
  { icon: 'mail', title: company.email, text: 'Send plans or photos anytime', href: `mailto:${company.email}` },
  { icon: 'pin', title: 'Shop & showroom', text: `${company.address} · visits by appointment` },
];

export default function Contact() {
  return (
    <section className="contact" id="quote">
      <div className="wrap contact__grid">
        <div>
          <SectionHeader
            eyebrow="Free quote"
            title="Let's build something great"
            lead="Tell us about your project and we'll get back to you within one business day."
          />
          <div className="contact__info">
            {contactItems.map((item) => (
              <div className="contact__item" key={item.icon}>
                <span className="icon-box"><Icon name={item.icon} /></span>
                <p>
                  {item.href ? <a href={item.href}><strong>{item.title}</strong></a> : <strong>{item.title}</strong>}
                  <span>{item.text}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
