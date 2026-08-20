import { createContext, useContext, useEffect, useState } from 'react';
import * as en from '../data/profile';
import * as de from '../data/profile.de';
import { uiStrings } from '../data/uiStrings';

const dataByLanguage = { en, de };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'en');

  useEffect(() => {
    localStorage.setItem('lang', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    content: dataByLanguage[language],
    t: uiStrings[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
