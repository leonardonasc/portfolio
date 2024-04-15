import cardImg from "../assets/img/card.jpg";
// importar imagem como funcao src={cardImg}

function Card() {
  return (
    <div className="cards">
      <div className="card">
        <img src={cardImg} alt="card1" />
        <div className="card__content">
          <h2>Projeto 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt
            ullam veritatis deleniti distinctio architecto. Cum, aperiam
            perspiciatis!
          </p>
          <a href="#" className="demo_btn">
            demo
          </a>
        </div>
      </div>
      <div className="card">
        <img src={cardImg} alt="card2" />
        <div className="card__content">
          <h2>Projeto 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt
            ullam veritatis deleniti distinctio architecto. Cum, aperiam
            perspiciatis!
          </p>
          <a href="#" className="demo_btn">
            demo
          </a>
        </div>
      </div>
      <div className="card">
        <img src={cardImg} alt="card3" />
        <div className="card__content">
          <h2>Projeto 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sunt
            ullam veritatis deleniti distinctio architecto. Cum, aperiam
            perspiciatis!
          </p>
          <a href="#" className="demo_btn">
            demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
