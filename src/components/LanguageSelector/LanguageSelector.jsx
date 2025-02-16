import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import usaFlag from '../../assets/images/icon-us.svg';
import spainFlag from '../../assets/images/icon-es.svg';
import downArrow from '../../assets/images/arrow-down.svg';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    code: 'es',
    name: 'ES',
    icon: spainFlag
  });

  const languages = [
    { code: 'en', name: 'EN', icon: usaFlag },
    { code: 'es', name: 'ES', icon: spainFlag }
  ];

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.code);
    setIsOpen(false);
  };

  return (
    <div className="language-selector-container">
      <button 
        className="language-selector-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={selectedLanguage.icon} alt="Language Icon" className="language-icon" />
        <span className="language-name">{selectedLanguage.name}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}><img src={downArrow} alt="Down Arrow" /></span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="language-option"
              onClick={() => handleLanguageSelect(lang)}
            >
              <img src={lang.icon} alt="Language Icon" className="language-icon" />
              <span className="language-name">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;