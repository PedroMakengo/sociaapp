import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

import { ItemFooter } from "../ItemFooter";
import style from "./style.module.scss";

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <ItemFooter className={style.itemFooter} title="Acerca" />
        <ItemFooter className={style.itemFooter} title="Sobre" />
        <ItemFooter
          className={style.itemFooter}
          title="Baixar agora"
          isParagraph={false}
        />
        <ItemFooter
          className={style.itemFooter}
          title="Newsletter"
          isParagraph={true}
        />
      </div>
      <div className={style.contentFooter}>
        <span>
          ©Todos direitos reservado <a href="#">Inokri 2021</a>
        </span>
        <div className="redes">
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
