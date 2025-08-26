import React from "react";
import "./SocialMedia.scss";

export default function SocialMedia() {
  // Données des réseaux sociaux directement dans le composant
  const socialLinks = {
    github: "https://github.com/Skhiri23",
    linkedin: "https://www.linkedin.com/in/mohamed-aziz-skhiri-498627254/",
    gmail: "azizskhiri107@gmail.com",
    whatsapp: "https://wa.me/21652237532?text=Hello%20Aziz%2C%20I%20saw%20your%20portfolio!" // Remplace par ton numéro (216 = indicatif Tunisie)
  };

  return (
    <div className="social-media-div">
      {socialLinks.github && (
        <a
          href={socialLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      )}

      {socialLinks.linkedin && (
        <a
          href={socialLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      )}

      {socialLinks.gmail && (
        <a
          href={`mailto:${socialLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      )}

      {socialLinks.whatsapp && (
        <a
          href={socialLinks.whatsapp}
          className="icon-button whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
          <span></span>
        </a>
      )}
    </div>
  );
}
