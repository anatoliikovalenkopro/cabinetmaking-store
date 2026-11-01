import Icon from '../Icon/Icon';

export default function ServiceCard({ icon, title, text, tag }) {
  return (
    <article className="service-card reveal">
      <div className="icon-box">
        <Icon name={icon} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
      <span className="service-card__tag">{tag}</span>
    </article>
  );
}
