// ICONS
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { AiOutlineLine } from "react-icons/ai";

// COMPONENTS
import Footer from "./Footer";
import Card from "../components/Card";

function Content() {
  return (
    <>
      <section className="content-container" id="content-container">
        <h1 className="title-h1">
          Leonardo Nascimento
          <AiOutlineLine className="line" />
        </h1>
        <h2 className="title-content">
          FRONT-END DEVELOPER,
          <span className="br-span">
            CHANGING THE WORLD WITH CODE<span>.</span>
          </span>
        </h2>
        <div className="title-items">
          <a
            href="https://github.com/leonardonasc/"
            target="_blank"
            className="title-anchor"
          >
            <RiGithubFill />
            GitHub
            <RiArrowRightUpLine />
          </a>
          <a
            href="https://www.linkedin.com/in/leonardownascimento/"
            target="_blank"
            className="title-anchor"
          >
            <RiLinkedinBoxFill />
            LinkedIn
            <RiArrowRightUpLine />
          </a>
        </div>

        <Footer />
      </section>

      <section id="secondary-container" className="secondary-container">
        <h2 className="title-about">About me</h2>
        <p className="p-about">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil saepe
          in laboriosam ratione rerum quidem sunt harum reprehenderit voluptatem
          eos dicta voluptatibus voluptate praesentium, provident, dolorem
          delectus officiis aliquam excepturi! Lorem ipsum dolor sit amet
          consectetur adipisicing elit.<br></br>
          <br /> Nobis corrupti saepe doloribus, molestiae reprehenderit ducimus
          accusamus nulla laborum iste illum, labore officiis odio vel enim
          atque sequi corporis, adipisci earum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Minus repellendus dolor itaque
          blanditiis
        </p>
        <Footer />
      </section>

      <section id="tertiary-container" className="tertiary-container">
        <h2 className="title-projects">Projects</h2>
        <div className="cards-div">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}

export default Content;
