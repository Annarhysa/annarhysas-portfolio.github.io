export const sectionOrder = [
  'home',
  'about',
  'experience',
  'education',
  'skills',
  'projects',
  'accomplishments',
  'activities',
  'hobbies',
  'blogs',
  'contact',
];

export function nextSectionId(currentId) {
  const index = sectionOrder.indexOf(currentId);
  if (index === -1 || index === sectionOrder.length - 1) return null;
  return sectionOrder[index + 1];
}
