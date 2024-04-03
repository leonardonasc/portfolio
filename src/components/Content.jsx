import { AiFillGithub } from "react-icons/ai";
import Footer from "./Footer";

function Content() {
  return (
    <>
    <section className="content-container" id="content-container">
      <h1 className="title-content">
        FRONT-END DEVELOPER, 
        <span className="br-span">CHANGING THE WORLD WITH CODE<span>.</span></span>
      </h1>
  
      <Footer />
      </section>
      <section id="secondary-container">
        <h2 className="title-second">About me</h2>
      </section>

    </>
  );
}

export default Content;
