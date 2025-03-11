import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import telephone from "../images/logos/telephone.png";
import position from "../images/logos/localisation.png";
import mail from "../images/logos/mail.png";
import instagram from "../images/logos/instagram.png";
import facebook from "../images/logos/facebook.png";
import tiktok from "../images/logos/tiktok.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (sectionId.startsWith("service")) {
      if (location.pathname === "/Services") {
        scrollToSection(sectionId);
      } else {
        navigate("/Services", { state: { sectionId } });
      }
    }
    if (sectionId.startsWith("apropos")) {
      if (location.pathname === "/A-Propos") {
        scrollToSection(sectionId);
      } else {
        navigate("/A-Propos", { state: { sectionId } });
      }
    }
  };

  // Déclenche le défilement lorsqu'on arrive sur /Services
  useEffect(() => {
    if (
      location.pathname === "/Services" ||
      location.pathname === "/A-Propos"
    ) {
      // Vérifie si location.state est défini et contient sectionId
      const sectionId = location.state?.sectionId || "defaultSectionId"; // Remplacez 'defaultSectionId' par votre section par défaut
      scrollToSection(sectionId);
    }
  }, [location.pathname, location.state]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-RoseHiver p-12 mt-auto text-center mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 text-sm">
        <section className="m-2 text-lg">
          <h3 className="text-xl">
            <strong>Services</strong>
          </h3>
          <div className="flex my-1 mx-auto items-center">
            <button
              onClick={() => handleScrollToSection("service-position")}
              className=""
            >
              Zone d'action
            </button>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <button
              onClick={() => handleScrollToSection("service-tarifs")}
              className=""
            >
              Service canins
            </button>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <p className="">Service félins</p>
          </div>
        </section>
        <section className="m-2 text-lg">
          <h3 className="text-xl">
            <strong>À propos</strong>
          </h3>
          <div className="flex my-1 mx-auto items-center">
            <button
              onClick={() => handleScrollToSection("apropos-qui")}
              className=""
            >
              Qui suis-je ?
            </button>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <button
              onClick={() => handleScrollToSection("apropos-parcours")}
              className=""
            >
              Mon parcours
            </button>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <button
              onClick={() => handleScrollToSection("apropos-methode")}
              className=""
            >
              Ma méthode
            </button>
          </div>
        </section>
        <section className="m-2">
          <h3 className="text-xl">
            <strong>Réseaux</strong>
          </h3>
          <div className="flex my-1 mx-auto items-center">
            <img src={instagram} alt="Logo" className="h-8 w-8 mr-4" />
            <a href="https://www.instagram.com/" className="">
              Instagram
            </a>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <img src={facebook} alt="Logo" className="h-8 w-8 mr-4" />
            <a href="https://www.facebook.com/?locale=fr_FR/" className="">
              Facebook
            </a>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <img src={tiktok} alt="Logo" className="h-8 w-8 mr-4" />
            <a href="https://www.tiktok.com/fr/" className="">
              TikTok
            </a>
          </div>
        </section>
        <section className="m-2">
          <h3 className="text-xl">
            <strong>Contact</strong>
          </h3>
          <div className="flex my-1 mx-auto items-center">
            <img src={mail} alt="Logo" className="h-8 w-8 mr-4" />
            <p className="">JulietteCorp@gmail.com</p>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <img src={telephone} alt="Logo" className="h-8 w-8 mr-4" />
            <p className="">06 75 84 65 12</p>
          </div>
          <div className="flex my-1 mx-auto items-center">
            <img src={position} alt="Logo" className="h-8 w-8 mr-4" />
            <p className="">N°10 rue du JeSaisPas</p>
          </div>
        </section>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
