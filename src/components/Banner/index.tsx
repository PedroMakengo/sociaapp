import {
  FaAppStore,
  FaGooglePlay,
  FaUserNinja,
  FaAccessibleIcon,
  FaUsers,
  FaPhone,
} from "react-icons/fa";
import { Button } from "../Button";
import { ItemRecursos } from "./ItemRecursos/item";

import style from "./style.module.scss";

export function Banner() {
  return (
    <>
      <div className={style.banner}>
        <div className={style.container}>
          <div className={style.describe}>
            <h1>Sócia App</h1>
            <p>
              É uma plataforma que permite aos utilizadores partilharem a compra
              de artigos.
            </p>
            <div className={style.buttons}>
              <Button icon={<FaAppStore />} title="Play Store" />
              <Button icon={<FaGooglePlay />} title="Google Play" />
            </div>
          </div>
          <img src="../../images/mao2.png" alt="" />
        </div>
      </div>
      <div className={style.recursos}>
        <div className={style.content}>
          <ItemRecursos
            className={style.item}
            title="Faça sócia"
            paragraph="Efetuar a sócia de produto com várias pessoas"
            icon={<FaUserNinja />}
          />
          <ItemRecursos
            className={style.item}
            title="Entrega grátis"
            paragraph="Efetuar a sócia de produto com várias pessoas"
            icon={<FaAccessibleIcon />}
          />
          <ItemRecursos
            className={style.item}
            title="Asseguramos"
            paragraph="Buscamos novos fornecedores constantemente"
            icon={<FaUsers />}
          />
          <ItemRecursos
            className={style.item}
            title="Disponibilidade"
            paragraph="Estamos disponível para lhe atender 24h/24h"
            icon={<FaPhone />}
          />
        </div>
      </div>
    </>
  );
}
