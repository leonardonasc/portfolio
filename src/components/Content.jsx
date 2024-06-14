// ICONS
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { AiOutlineLine } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

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
          <a
            className="title-anchor"
            href="mailto:leonardo.nasmt@gmail.com"
          >Contact <IoMailOpenOutline /></a>
        </div>

        <Footer pag={"#secondary-container"} />
      </section>

      <section id="secondary-container" className="secondary-container">
        <aside className="about">
          <h2 className="title-about">About me</h2>
          <p className="p-secondary">
            Hi there! You can call me Leo if you want!{" "}
            <span className="br-span"></span> I'm a React enthusiast. Always
            seeking new ways to craft amazing digital experiences, I value
            continuous learning and teamwork. I'm open to exciting challenges
            and growth opportunities in the world of web development. Let's
            create something awesome together!
          </p>
          <a className="contact-btn" href="#contact">
            Contact me
          </a>
        </aside>
        <Footer className="arrow-down" pag={"#tertiary-container"} />
      </section>

      <section id="tertiary-container" className="tertiary-container">
        <h2 className="title-projects">Latest Projects</h2>
        <div className="cards-div">
          <Card
            titulo={"Decodificador"}
            descricao={
              "Com o objetivo de codificar e decodificar textos, este projeto é um challenge construido durante o curso da Oracle One, usando HTML, CSS e JS. "
            }
            img={"https://placehold.co/400x400"}
            url={"#"}
          />

          <Card
            titulo={"dd"}
            descricao={
              "Com o objetivo de codificar e decodificar textos, este projeto é um challenge construido durante o curso da Oracle One, usando HTML, CSS e JS. "
            }
            img={"https://placehold.co/400x400"}
            url={"#"}
          />

          <Card
            titulo={"Cep Api"}
            descricao={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suntmolestiae aspernatur, ea nemo, nesciunt velit dolorem modi voluptatem"
            }
            img={"https://placehold.co/400x400"}
            url={"#"}
          />
        </div>
        <div className="footer-teste">
        </div>
      </section>
    </>
  );
}

export default Content;
