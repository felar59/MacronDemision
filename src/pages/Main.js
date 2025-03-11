/* IMPORT DE COMPONENTS */
import Header from "../components/NavBar";
import Footer from "../components/footer";

/* IMPORT D'IMAGE */
import chienImage from "../images/chienexemple.png";

function Main() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <article className="lg:max-w-[70%]  mx-auto">
        <div className="lg:flex mt-10 mx-auto items-center max-w-[60%] grid">
          <div className="select-none">
            <img
              src={chienImage}
              alt="Chien"
              className="mx-auto drop-shadow-vert"
            />
          </div>
          <p className="p-5 mt-10 lg:mt-0">
            <strong>
              Services de Petsitting à Arras – Des soins comme à la maison pour
              vos compagnons
            </strong>
            <br></br>
            Votre petsitter de confiance à Arras pour s’occuper de vos animaux
            avec amour et attention.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Main;
