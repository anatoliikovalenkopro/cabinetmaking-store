import { useState } from 'react';
import { quoteOptions } from '../../data/content';
import './QuoteForm.css';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  city: quoteOptions.cities[0],
  projects: [],
  budget: quoteOptions.budgets[0],
  timeline: quoteOptions.timelines[0],
  details: '',
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleProject = (type) => {
    const projects = form.projects.includes(type)
      ? form.projects.filter((p) => p !== type)
      : [...form.projects, type];
    setForm({ ...form, projects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send `form` to a backend or a service like Formspree
    console.log('Quote request:', form);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="quote-form__field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="quote-form__field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
      </div>
      <div className="quote-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="quote-form__field">
        <label htmlFor="city">City / area</label>
        <select id="city" name="city" value={form.city} onChange={handleChange}>
          {quoteOptions.cities.map((c) => <option key={c}>{c}</option>)}
        </select>
      </div>

      <div className="quote-form__field quote-form__field--full">
        <label>What are you looking for?</label>
        <div className="quote-form__chips">
          {quoteOptions.projectTypes.map((type) => (
            <label key={type} className={form.projects.includes(type) ? 'is-checked' : ''}>
              <input type="checkbox" checked={form.projects.includes(type)} onChange={() => toggleProject(type)} />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div className="quote-form__field">
        <label htmlFor="budget">Budget range</label>
        <select id="budget" name="budget" value={form.budget} onChange={handleChange}>
          {quoteOptions.budgets.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div className="quote-form__field">
        <label htmlFor="timeline">Timeline</label>
        <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange}>
          {quoteOptions.timelines.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="quote-form__field quote-form__field--full">
        <label htmlFor="details">Project details</label>
        <textarea
          id="details"
          name="details"
          value={form.details}
          onChange={handleChange}
          placeholder="Room size, style ideas, materials, anything helpful…"
        />
      </div>

      <div className="quote-form__field quote-form__field--full">
        <button className="btn btn--primary" type="submit">Request my free quote →</button>
      </div>

      {sent && (
        <div className="quote-form__success">
          Thanks! We've received your request and will be in touch within one business day.
        </div>
      )}
    </form>
  );
}
