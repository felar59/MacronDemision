import Header from "../components/NavBar";
import Footer from "../components/footer";

function Apropos() {
  return (
    <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h1 id="apropos-qui" className="text-center m-28 text-6xl">
          <strong>Qui suis-je ?</strong>
        </h1>
        <h1 id="apropos-parcours" className="text-center m-28 text-6xl">
          <strong>Mon parcours</strong>
        </h1>
        <h1 id="apropos-methode" className="text-center m-28 text-6xl">
          <strong>Ma méthode</strong>
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Apropos;
