import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { ItemFooter } from "./ItemFooter";
import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <ItemFooter
          className={style.itemFooter}
          title="Sobre"
          isParagraph={true}
          paragraph="É uma plataforma que permite aos utilizadores partilharem
           a
           compra de artigos.
          "
        />
        <ItemFooter className={style.itemFooter} title="Acerca" />
        <ItemFooter
          className={style.itemFooter}
          title="Baixar agora"
          isParagraph={false}
        />
        <ItemFooter
          className={style.itemFooter}
          title="Atendimento"
          isParagraph={true}
          paragraph="Precisas entrar em contacto com o nosso call center ? ligue 
          para estes terminais 921 538 972."
        />
      </div>
      <div className={style.contentFooter}>
        <span>
          ©Todos direitos reservado{" "}
          <a href="https://www.inokri.com" className={style.ref}>
            Inokri 2021
          </a>
        </span>
        <div className={style.redes}>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagramSquare />
          </a>
          <a href="#">
            <FaTwitterSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}
