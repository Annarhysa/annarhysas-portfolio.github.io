import { useLanguage } from '../context/LanguageContext';
import ScrollArrow from './ScrollArrow';

// 7 rows x 6 cols. Each cell: null (blank) or { l: letter, n?: clue number, red?: highlighted }
const GRID = [
  [null, null, { l: 'G', n: 1 }, null, null, { l: 'J', n: 2 }],
  [{ l: 'S', n: 3 }, null, { l: 'I' }, { l: 'S', n: 4 }, { l: 'N', n: 5, red: true }, { l: 'E' }],
  [{ l: 'P', n: 6, red: true }, { l: 'Y', red: true }, { l: 'T', red: true }, { l: 'H', red: true }, { l: 'O', red: true }, { l: 'N', red: true }],
  [{ l: 'R' }, null, null, { l: 'E' }, { l: 'D', red: true }, { l: 'K' }],
  [{ l: 'I' }, null, null, { l: 'L' }, { l: 'E', red: true }, { l: 'I' }],
  [{ l: 'N' }, null, null, { l: 'L' }, null, { l: 'N' }],
  [{ l: 'G' }, null, null, null, null, { l: 'S' }],
];

const CROSSWORD = {
  en: {
    across: [
      { n: 6, clue: 'Go-to language for scripting, ML pipelines and automation — backbone of the Machine Learning and Deep Learning work here.', len: 6 },
    ],
    down: [
      { n: 1, clue: 'Version control everyone pushes (and force-pushes) to, alongside GitHub and Gerrit workflows.', len: 3 },
      { n: 2, clue: 'CI/CD server orchestrating builds, Docker-based pipelines and JIRA-tracked releases.', len: 7 },
      { n: 3, clue: "Java framework for enterprise backends — Java's home turf.", len: 6 },
      { n: 4, clue: 'Command-line scripting environment for automation and data wrangling.', len: 5 },
      { n: 5, clue: 'JavaScript runtime powering the backend, paired with React, Next.js and Vue up front.', len: 4 },
    ],
    wordBank: [
      { label: 'Programming Langs', items: ['C/C++', 'GoLang', 'TypeScript', 'MATLAB', 'XML', 'JSON', 'Excel'] },
      { label: 'Data & Cloud', items: ['SQL', 'NoSQL', 'Data Processing', 'Intelligent Automation', 'Azure', 'AWS'] },
      { label: 'Soft Skills', items: ['Collaborative Leadership', 'Strategic Organization', 'Efficient Scheduling', 'Analytical Insight'] },
    ],
    languages: 'Languages',
  },
  de: {
    across: [
      { n: 6, clue: 'Sprache der Wahl für Scripting, ML-Pipelines und Automatisierung — das Rückgrat der Machine-Learning- und Deep-Learning-Arbeit hier.', len: 6 },
    ],
    down: [
      { n: 1, clue: 'Versionskontrolle, zu der jeder pusht (und force-pusht) — im Zusammenspiel mit GitHub- und Gerrit-Workflows.', len: 3 },
      { n: 2, clue: 'CI/CD-Server, der Builds orchestriert, mit Docker-basierten Pipelines und JIRA-verfolgten Releases.', len: 7 },
      { n: 3, clue: 'Java-Framework für Enterprise-Backends — die Heimat von Java.', len: 6 },
      { n: 4, clue: 'Kommandozeilen-Umgebung zum Scripten von Automatisierung und Datenverarbeitung.', len: 5 },
      { n: 5, clue: 'JavaScript-Laufzeitumgebung, die das Backend antreibt, im Zusammenspiel mit React, Next.js und Vue im Frontend.', len: 4 },
    ],
    wordBank: [
      { label: 'Programmiersprachen', items: ['C/C++', 'GoLang', 'TypeScript', 'MATLAB', 'XML', 'JSON', 'Excel'] },
      { label: 'Daten & Cloud', items: ['SQL', 'NoSQL', 'Datenverarbeitung', 'Intelligente Automatisierung', 'Azure', 'AWS'] },
      { label: 'Soft Skills', items: ['Kooperative Führung', 'Strategische Organisation', 'Effizientes Zeitmanagement', 'Analytisches Denken'] },
    ],
    languages: 'Sprachen',
  },
};

export default function Skills() {
  const { language, content, t } = useLanguage();
  const { skills } = content;
  const { across: ACROSS, down: DOWN, wordBank: WORD_BANK, languages: languagesLabel } = CROSSWORD[language];

  return (
    <section id="skills" className="section">
      <header className="section__header">
        <span className="section__label">{t.skills.label}</span>
        <h2 className="section__title">{t.skills.title}</h2>
      </header>

      <div className="crossword">
        <div className="crossword__clues">
          <div className="crossword__clue-group">
            <h3>{t.skills.across}</h3>
            <ul>
              {ACROSS.map(({ n, clue, len }) => (
                <li key={`a${n}`}><strong>{n}.</strong> {clue} <span>({len})</span></li>
              ))}
            </ul>
          </div>
          <div className="crossword__clue-group">
            <h3>{t.skills.down}</h3>
            <ul>
              {DOWN.map(({ n, clue, len }) => (
                <li key={`d${n}`}><strong>{n}.</strong> {clue} <span>({len})</span></li>
              ))}
            </ul>
          </div>
          <div className="crossword__wordbank">
            <h3>{t.skills.wordBank}</h3>
            {WORD_BANK.map(({ label, items }) => (
              <p key={label}><strong>{label}:</strong> {items.join(', ')}</p>
            ))}
          </div>

          <p className="crossword__languages">
            <span>{languagesLabel}</span> {skills.languages.join(' · ')}
          </p>
        </div>

        <div className="crossword__grid">
          {GRID.flat().map((cell, i) => (
            <div key={i} className={`crossword__cell${cell ? ' crossword__cell--filled' : ''}${cell?.red ? ' crossword__cell--red' : ''}`}>
              {cell?.n && <span className="crossword__number">{cell.n}</span>}
              {cell?.l}
            </div>
          ))}
        </div>
      </div>

      <ScrollArrow currentId="skills" />
    </section>
  );
}
