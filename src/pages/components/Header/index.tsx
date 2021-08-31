import style from "./style.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="../../images/logo-1.jpg" alt="" />
        <nav>
          <a href="#" className={style.active}>
            Home
          </a>
          <a href="#">Recursos</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Testemunhos</a>
          <a href="#">Contactos</a>
          <a href="#">Baixar agora</a>
        </nav>
      </div>
    </header>
  );
}
