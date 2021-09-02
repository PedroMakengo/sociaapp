import { useState } from "react";
import { FaBars } from "react-icons/fa";
import style from "./style.module.scss";

export function Header() {
  const [menu, setMenu] = useState(false);

  function checkedMenu() {
    const responsivo = document.querySelector("#responsive");
    responsivo.classList.toggle(`${style.active}`);
    console.log(responsivo);
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="../../images/logo-1.jpg" alt="" />
        <button onClick={checkedMenu}>
          <FaBars />
        </button>
        <nav className={style.responsive} id="responsive">
          <a href="#" className={style.active}>
            Home
          </a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#testemunhos">Testemunhos</a>
          <a href="#contactos">Contactos</a>
          <a href="#">Baixar agora</a>
        </nav>
      </div>
    </header>
  );
}
