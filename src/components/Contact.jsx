const contactMethods = [
  {
    label: 'Email',
    value: 'justinzack0711@gmail.com',
    href: 'mailto:justinzack0711@gmail.com',
    kind: 'email',
  },
  {
    label: 'WhatsApp',
    value: '+63 977 091 0927',
    href: 'https://wa.me/639770910927',
    kind: 'phone',
  },
  {
    label: 'LinkedIn',
    value: 'View my profile',
    href: 'https://www.linkedin.com/in/justin-zack-doctolero-798889349',
    kind: 'linkedin',
  },
]

function ContactIcon({ kind }) {
  if (kind === 'linkedin') {
    return <span className="contact-icon contact-icon--linkedin" aria-hidden="true">in</span>
  }

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'email' ? (
        <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>
      ) : (
        <path d="M21 16.4v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.7 2 2 0 0 1 3.1 1.5h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.5a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
      )}
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact">
      <p className="eyebrow">LET'S WORK TOGETHER</p>
      <h2>Get In <span>Touch</span></h2>
      <p>Have a project or job opportunity? Feel free to contact me.</p>
      <div className="contact-links">
        {contactMethods.map(({ label, value, href, kind }) => (
          <a className="contact-card" href={href} key={kind} target={kind === 'linkedin' ? '_blank' : undefined} rel={kind === 'linkedin' ? 'noopener noreferrer' : undefined}>
            <ContactIcon kind={kind} />
            <span className="contact-card-copy">
              <span className="contact-card-label">{label}</span>
              <span className="contact-card-value">{value}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}