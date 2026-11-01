import { company } from '../../data/company';
import './Footer.css';

const columns = [
  {
    title: 'Services',
    links: [
      { href: '#services', label: 'Kitchen cabinets' },
      { href: '#services', label: 'Vanities' },
      { href: '#services', label: 'Built-ins' },
      { href: '#tables', label: 'Custom tables' },
      { href: '#services', label: 'Commercial millwork' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '#process', label: 'Our process' },
      { href: '#work', label: 'Our work' },
      { href: '#faq', label: 'FAQ' },
      { href: '#quote', label: 'Free quote' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { href: company.phoneHref, label: company.phone },
      { href: `mailto:${company.email}`, label: company.email },
      { label: 'Calgary · Edmonton · All of Alberta' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <div className="logo footer__logo">
              <span className="logo__mark wood wood--walnut" />
              {company.name}
            </div>
            <p>Custom cabinetry and handcrafted furniture, designed and built in Alberta.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href ? <a href={link.href}>{link.label}</a> : link.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.fullName}. All rights reserved.</span>
          <span>Proudly Albertan 🇨🇦</span>
        </div>
      </div>
    </footer>
  );
}
