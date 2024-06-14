import { FaJs } from "react-icons/fa";

{
  /* <img src={cardImg} alt="card1" /> */
}
// importar imagem como funcao src={cardImg}

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-card">
        <img src={props.img} alt="card1" />
      </div>
      <div className="card-content">
        <h2>{props.titulo}</h2>
        <p>
          {props.descricao}
        </p>
        <a
          href={props.url}
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
