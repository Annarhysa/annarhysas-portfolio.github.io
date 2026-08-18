import { nextSectionId } from '../data/sectionOrder';

export default function ScrollArrow({ currentId }) {
  const nextId = nextSectionId(currentId);
  if (!nextId) return null;

  function handleClick() {
    document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <button
      type="button"
      className="scroll-arrow"
      onClick={handleClick}
      aria-label={`Scroll to next section`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
