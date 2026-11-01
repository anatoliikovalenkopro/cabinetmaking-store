import './SectionHeader.css';

export default function SectionHeader({ eyebrow, title, lead, center = false, light = false }) {
  return (
    <div className={`section-header ${center ? 'section-header--center' : ''}`}>
      <span className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
