import { skills } from '../data/profile';
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

const ACROSS = [
  { n: 6, clue: 'Go-to language for scripting, ML pipelines and automation — backbone of the Machine Learning and Deep Learning work here.', len: 6 },
];

const DOWN = [
  { n: 1, clue: 'Version control everyone pushes (and force-pushes) to, alongside GitHub and Gerrit workflows.', len: 3 },
  { n: 2, clue: 'CI/CD server orchestrating builds, Docker-based pipelines and JIRA-tracked releases.', len: 7 },
  { n: 3, clue: "Java framework for enterprise backends — Java's home turf.", len: 6 },
  { n: 4, clue: 'Command-line scripting environment for automation and data wrangling.', len: 5 },
  { n: 5, clue: 'JavaScript runtime powering the backend, paired with React, Next.js and Vue up front.', len: 4 },
];

const WORD_BANK = [
  { label: 'Programming Langs', items: ['C/C++', 'GoLang', 'TypeScript', 'MATLAB', 'XML', 'JSON', 'Excel'] },
  { label: 'Data & Cloud', items: ['SQL', 'NoSQL', 'Data Processing', 'Intelligent Automation', 'Azure', 'AWS'] },
  { label: 'Soft Skills', items: ['Collaborative Leadership', 'Strategic Organization', 'Efficient Scheduling', 'Analytical Insight'] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <header className="section__header">
        <span className="section__label">Expertise</span>
        <h2 className="section__title">Skills & Languages</h2>
      </header>

      <div className="crossword">
        <div className="crossword__clues">
          <div className="crossword__clue-group">
            <h3>Across</h3>
            <ul>
              {ACROSS.map(({ n, clue, len }) => (
                <li key={`a${n}`}><strong>{n}.</strong> {clue} <span>({len})</span></li>
              ))}
            </ul>
          </div>
          <div className="crossword__clue-group">
            <h3>Down</h3>
            <ul>
              {DOWN.map(({ n, clue, len }) => (
                <li key={`d${n}`}><strong>{n}.</strong> {clue} <span>({len})</span></li>
              ))}
            </ul>
          </div>
          <div className="crossword__wordbank">
            <h3>Word Bank</h3>
            {WORD_BANK.map(({ label, items }) => (
              <p key={label}><strong>{label}:</strong> {items.join(', ')}</p>
            ))}
          </div>

          <p className="crossword__languages">
            <span>Languages</span> {skills.languages.join(' · ')}
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
