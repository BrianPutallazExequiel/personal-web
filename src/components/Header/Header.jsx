import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';
import Logo from '../../assets/images/logo.webp';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="index.html" className="header__logo">
        <img src={Logo} alt="Logo Brian Exequiel" className="header__logo-image" />
      </a>
      <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-item"><a href="index.html" className="header__nav-link">{t('home')}</a></li>
          <li className="header__nav-item"><a href="#about" className="header__nav-link">{t('about')}</a></li>
          <li className="header__nav-item"><a href="#services" className="header__nav-link">{t('services')}</a></li>
          <li className="header__nav-item"><a href="#contact" className="header__nav-link">{t('contact')}</a></li>
        </ul>
      </nav>
      <div className="header__language-switcher">
        <LanguageSelector/>
        <button className="header__contact-button">{t('contact')}</button>
      </div>
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" onClick={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </header>
  );
};

export default Header;