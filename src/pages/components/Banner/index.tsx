import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { Button } from "../Button";

import style from "./style.module.scss";

export function Banner() {
  return (
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
  );
}
