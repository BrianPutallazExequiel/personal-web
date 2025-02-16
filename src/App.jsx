import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import './styles/reset.css';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    document.documentElement.lang = i18n.language; // Cambiar el atributo lang
    document.title = t('title'); // Cambiar el título del documento
  }, [i18n.language, t]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
