import React from "react";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import Image from "../../assets/images/profile.png";

const Hero = () => {
    const { t, i18n } = useTranslation();
    return (
        <section className="hero hero--main">
            <div className="hero__content">
                <h2 className="hero__title">👋 {t("hero-presentation")}</h2>
                <h1 className="hero__subtitle">{t("hero-profession")}</h1>
                <p className="hero__description">{t("hero-paragraph")}</p>
                <a href="#contact" className="hero__contact-button">
                    {t("contact")}
                </a>
            </div>
            <div className="hero__image">
                <img src={Image} alt="Foto de Brian Exequiel" />
            </div>
        </section>
    );
};

export default Hero;
