import SectionHeader from '../SectionHeader/SectionHeader';
import { processSteps } from '../../data/content';
import './Process.css';

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <SectionHeader
          center
          eyebrow="How it works"
          title="Simple from first sketch to final install"
          lead="Clear pricing, a dedicated project lead and no surprises."
        />
        <div className="process__steps">
          {processSteps.map((step, i) => (
            <div className="process__step reveal" key={step.title}>
              <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
