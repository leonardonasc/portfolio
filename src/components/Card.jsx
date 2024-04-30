import cardImg from "../assets/img/cateeo.jpg";
import { FaJs } from "react-icons/fa";

{
  /* <img src={cardImg} alt="card1" /> */
}
// importar imagem como funcao src={cardImg}

function Card() {
  return (
    <div className="card">
      <div className="img-card">
        <img src={cardImg} alt="card1" />
      </div>
      <div className="card-content">
        <h2>Decodificador</h2>
        <p>
          Com o objetivo de codificar e decodificar textos, este projeto é um
          challenge construido durante o curso da Oracle One, usando HTML, CSS e
          JS.
        </p>
        {/* <FaJs/> */}
        <a
          href="https://decodific.vercel.app/"
          target="_Blank"
          className="demo_btn"
        >
          Demo
        </a>
      </div>
    </div>
    
    
  );
}

export default Card;
