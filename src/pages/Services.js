import Header from "../components/NavBar";
import Footer from "../components/footer";
import React, { useEffect, useState } from "react";

import ChienLaisse from "../images/ChienLaisse.jpeg";
import ChienDisque from "../images/ChienDisque.jpeg";
import ChienPlage from "../images/ChienBois.jpeg";
import ChienBlanc from "../images/ChienBlanc.jpeg";
import ChatDort from "../images/ChatDort.jpeg";
import CharRobinet from "../images/ChatRobinet.jpeg";

import Arras from "../images/Arras.png";

import Empreinte from "../components/imageSvg/Empreinte";
import BdrlBeigeGreen from "../components/imageSvg/BdrlBeigeGreen";
import BdrlRoseGreen from "../components/imageSvg/BdrlRoseGreen";
import ChatMignon from "../components/imageSvg/ChatMignon";

function Services() {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    console.log(screenWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [screenWidth]);

  return (
    <div>
      <div id="service-position" className="lg:min-h-[90px] min-h-[20px]">
        <Header />
      </div>
      <article className="text-white min-w-screeen 2xl:max-w-[80%] h-full mx-auto">
        <section className="flex flex-col service:grid service:grid-cols-2 items-center text-green-700 bg-RoseHiver">
          <div className="absolute transform rotate-[25deg] top-[10vh] left-[80vw] xl:top-[12vh] sm:left-[89vw] h-[20vw] w-[10vw] service:left-[40vw] sm:w-[8vw] sm:h-[8vw] lg:w-[8vw] lg:h-[8vw] xl:w-[6vw] xl:h-[6vw]">
            <Empreinte Couleur="#008000" />
          </div>

          <div className="flex flex-col mx-auto justify-center max-w-[90%] max-h-[90%] h-full p-4">
            <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
              Services pour boules de poils
            </h2>
            <p className="phone:my-2 my-6 text-base lg:text-xl xl:text-2xl">
              Je me déplace à votre domicile pour m'occuper de vos compagnons
              pendant vos absences, qu’elles soient de longues ou courtes
              durées, afin de leur éviter tout stress ou anxiété, et de rester
              dans leur environnement lors de vos départs. Pour les chiens moins
              anxieux, je peux également les accueillir chez moi pour un séjour
              agréable et confortable selon votre demande.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <img
              src={Arras}
              alt="Arras"
              className="w-full fill-current text-green-800 h-auto object-cover service:h-full"
            />
          </div>
        </section>
        <BdrlRoseGreen />
        <section className="bg-BeigePeace">
          <div className="p-5 text-green-700">
            <h2 className="p-2 underline underline-offset-4 text-4xl text-center font-cat">
              <strong>Services Canins</strong>
            </h2>
            <br></br>
            <div className="flex text-sm lg:text-md xl:text-base">
              <div>
                <h2 className="text-center text-3xl font-cat">
                  <strong>Balades Chiens</strong>
                </h2>
                <div className="max-w-[90%]">
                  <p>
                    Balade de <strong> 30min </strong>: à partir de 16€
                  </p>
                  <p>
                    Balade de <strong>1h</strong> : à partir de 27€
                  </p>
                  <br />
                  <p>
                    Abonnement <strong>hebdomadaire</strong> : à partir de 72€ -
                    comprenant 5 balades de 30min (hors WE)
                  </p>
                </div>
              </div>
              <br />
              <div>
                <h2 className="text-center text-3xl font-cat">
                  <strong>Gardes Chiens</strong>
                </h2>
                <p>( Balades incluses )</p>
                <br></br>
                <p>
                  Gardes à votre domicile (7j max) : 2 passages par jour, à
                  raison de 1h à 2h selon votre choix
                </p>
                <br></br>
                <p>Gardes à mon domicile (7j max)</p>
              </div>
            </div>
          </div>
          <br></br>
          <div className="mx-auto overflow-hidden">
            <div
              className="flex space-x-2 mx-auto pb-1 transform transition-transform"
              style={{
                transform: `translateX(${-scrollY}px)`,
              }}
            >
              <img
                src={ChienLaisse}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienDisque}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienBlanc}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienPlage}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienLaisse}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienDisque}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienBlanc}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
              <img
                src={ChienPlage}
                alt="Chien"
                className="max-w-sm rounded-xl"
              />
            </div>
          </div>
        </section>
        <BdrlBeigeGreen />
        <section className="flex flex-col service:grid service:grid-cols-2 items-center bg-green-900">
          <div className="flex mx-auto overflow-hidden justify-center items-center">
            <img
              src={ChatDort}
              alt="Chat"
              className="w-full max-w-xl sm:max-w-sm lg:max-w-md object-cover h-auto"
            />
            <img
              src={CharRobinet}
              alt="Chat"
              className="hidden sm:block w-full max-w-xs md:max-w-sm lg:max-w-md object-cover h-auto"
            />
          </div>
          <div className="flex flex-col mx-auto justify-center max-w-[90%] max-h-[90%] h-full p-4 text-white">
            <h2 className="p-2 underline underline-offset-4 text-4xl text-center font-cat">
              <strong>Services Félins</strong>
            </h2>
            <div className="text-md lg:text-base xl:text-lg sm:font-medium">
              <br />
              <h2 className="text-3xl font-cat">
                <strong>Gardes Félins</strong>
              </h2>
              <br />
              <p>
                Gardes à votre domicile (7j max) : 2 passages par jour, à raison
                de 1h à 2h selon votre choix
              </p>
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </div>
  );
}

export default Services;
