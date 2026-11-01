import { trustPoints } from '../../data/company';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="wrap trust-bar__inner">
        {trustPoints.map((point) => (
          <span key={point}>{point}</span>
        ))}
      </div>
    </div>
  );
}
