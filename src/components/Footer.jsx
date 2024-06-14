import { FaAngleDoubleDown } from "react-icons/fa";

const Footer = (props) =>{
  return(
    <div className="footer-scroll">
      {/* remover a ancora de baixo e trocar para uma div pra fazer o props dela */}
    <a href={props.pag} ><FaAngleDoubleDown/></a> 
    </div>
  );
}

export default Footer;