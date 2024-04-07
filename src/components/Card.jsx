import cardImg from '../assets/img/cateeo.jpg';

function Card() {
  return(
  
      <div className="card">
        <img src={cardImg} alt="alt da img" />
        <h1>Projeto ?</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi odio eum, voluptatibus maxime, magni quod distinctio ullam recusandae molestias dignissimos eligendi dolorum iusto error corrupti animi officiis quae amet.</p>
      </div>
  );
}

export default Card;