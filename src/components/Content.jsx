// ICONS
import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { AiOutlineLine } from "react-icons/ai";
import { IoMailOpenOutline } from "react-icons/io5";

import { HiOutlineEmojiHappy } from "react-icons/hi";
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
        <aside className="about">
        <h2 className="title-about">About me</h2>
          <p className="p-secondary">
          Hi there! You can call me Leo if you want! <span className="br-span"></span> I'm a React enthusiast. Always seeking new ways to craft amazing digital experiences, I value continuous learning and teamwork. I'm open to exciting challenges and growth opportunities in the world of web development. Let's create something awesome together!

          </p>
          <a className="contact-btn" href="#contact">Contact me</a>
        </aside>
      </section>

      <section className="skills">
        <h2 className="title-skills">Skills</h2>
        <p className="p-skills">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae aspernatur, ea nemo, nesciunt velit dolorem modi voluptatem neque mollitia aut, tempore harum animi. Ea sapiente laudantium doloremque deserunt debitis.</p>
      </section>

      <section id="tertiary-container" className="tertiary-container">
        <h2 className="title-projects">Lastest Projects</h2>
        <div className="cards-div">
          <Card />
        </div>
      </section>

      <section id="contact" className="contact">
        <a className="contact__anchor" href="mailto:leonardo.nasmt@gmail.com">
          Contacte me <IoMailOpenOutline />
        </a>
      </section>

      
    </>
  );
}

export default Content;
