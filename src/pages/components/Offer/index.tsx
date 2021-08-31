import { Button } from "../Button";
import style from "./style.module.scss";

export function Offer() {
  return (
    <div className={style.bannerOferta}>
      <div className={style.container}>
        <div>
          <h1>Sócia Agente</h1>
          <p>
            Não tens um smartphone para efetuar as operações dentro da aplicação
            sócia ? Não se preocupe temos para si os nossos agentes que podem
            ajudar-te com isso
          </p>
          <Button title="Contactar agora" />
        </div>
        <div></div>
      </div>
    </div>
  );
}
