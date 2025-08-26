import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  // Données de contact directement dans le composant
  const contactData = {
    title: "Reach Out to me!",
    subtitle: "Let's discuss a project, a collaboration, or just say hello!",
    phone: "+216 52 237 532",
    email: "azizskhiri107@gmail.com"
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactData.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactData.subtitle}
            </p>
            
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {/* Informations de contact */}
              <div className="contact-info">
                {/* Téléphone */}
                <div className="contact-item">
                  <a 
                    className="contact-detail" 
                    href={`tel:${contactData.phone}`}
                    title="Appelez-moi"
                  >
                    📞 {contactData.phone}
                  </a>
                </div>
                
                {/* Email */}
                <div className="contact-item">
                  <a
                    className="contact-detail-email"
                    href={`mailto:${contactData.email}`}
                    title="Envoyez-moi un email"
                  >
                    ✉️ {contactData.email}
                  </a>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="social-section">
                <SocialMedia />
              </div>
            </div>
          </div>
          
          {/* Image / Animation */}
          <div className="contact-image-div">
            <img
              alt="Contact illustration"
              src={require("../../assets/images/contactMailDark.svg")}
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}