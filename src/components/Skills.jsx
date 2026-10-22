const editingTools = [
  { name: 'CapCut', icon: 'C', className: 'tool-icon--capcut' },
  { name: 'Canva', icon: 'C', className: 'tool-icon--canva' },
]

const aiTools = [
  { name: 'Higgsfield', icon: 'H', className: 'tool-icon--higgsfield' },
  { name: 'ChatGPT', icon: '\u25ce', className: 'tool-icon--chatgpt' },
  { name: 'Google Gemini', icon: '\u2726', className: 'tool-icon--gemini' },
  { name: 'Claude', icon: '\u2733', className: 'tool-icon--claude' },
  { name: 'OpenAI Codex', icon: '<>', className: 'tool-icon--codex' },
]

const technologies = ['HTML', 'CSS', 'Java']

function CategoryIcon({ kind }) {
  const shared = {
    viewBox: '0 0 32 32',
    width: 34,
    height: 34,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (kind === 'video') {
    return <svg {...shared}><rect x="4" y="8" width="24" height="19" rx="3" /><path d="m9 8-2-4m8 4-2-4m8 4-2-4m1 10 5 3-5 3z" /></svg>
  }
  if (kind === 'code') {
    return <svg {...shared}><path d="m11 9-7 7 7 7m10-14 7 7-7 7m-3-19-4 24" /></svg>
  }
  return <svg {...shared}><path d="M16 5a5 5 0 0 0-9 3 5 5 0 0 0-2 9 5 5 0 0 0 4 8 5 5 0 0 0 7-3zm0 0a5 5 0 0 1 9 3 5 5 0 0 1 2 9 5 5 0 0 1-4 8 5 5 0 0 1-7-3zM16 5v22m-5-17h2m-4 8h4m-3 7h3m6-15h-2m4 8h-4m3 7h-3" /></svg>
}

function ToolList({ tools, label }) {
  return (
    <ul className="tool-list" aria-label={label}>
      {tools.map((tool) => (
        <li key={tool.name}>
          <span className={`tool-icon ${tool.className ?? ''}`} aria-hidden="true">
            {tool.image ? <img src={tool.image} alt="" /> : tool.icon}
          </span>
          <span>{tool.name}</span>
        </li>
      ))}
    </ul>
  )
}

function ExpertiseCard({ kind, title, description, label, tools, tech }) {
  return (
    <article className="card expertise-card">
      <CategoryIcon kind={kind} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="expertise-card-meta">
        <h4 className="skills-subheading">{label}</h4>
        {tools ? (
          <ToolList tools={tools} label={`${title} tools`} />
        ) : (
          <ul className="technology-list" aria-label="Web development technologies">
            {tech.map((name) => <li key={name}>{name}</li>)}
          </ul>
        )}
      </div>
    </article>
  )
}

export default function Skills() {
  return (
    <section id="skill" className="dark-section skills-section">
      <p className="eyebrow">MY EXPERTISE</p>
      <h2>Tools &amp; <span>Skills</span></h2>
      <div className="skills-grid">
        <ExpertiseCard
          kind="video"
          title="Video Editing"
          description="Creating engaging videos through visual storytelling, pacing, transitions, captions, and sound design."
          label="Tools"
          tools={editingTools}
        />
        <ExpertiseCard
          kind="code"
          title="Web Development"
          description="Building responsive websites and interactive digital experiences using web technologies."
          label="Technologies"
          tech={technologies}
        />
        <ExpertiseCard
          kind="ai"
          title="AI Tools"
          description="Using AI-powered tools to support creative production, coding, research, and problem-solving."
          label="Tools"
          tools={aiTools}
        />
      </div>
    </section>
  )
}