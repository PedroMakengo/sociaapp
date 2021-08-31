import { FaStore } from "react-icons/fa";
import style from "./style.module.scss";

export function Testimonies() {
  return (
    <section className={style.testimonies}>
      <div className={style.container}>
        <div></div>
        <div className={style.slider}>
          <h1>Testemunhos</h1>
          <div className={style.content}>
            <div className={style.item}>
              <img src="../../../images/firmino.jpg" alt="Augusto Firmino" />
              <div className={style.describe}>
                <div className={style.avatar}>
                  <h3>Augusto Firmino</h3>
                  <span>
                    <FaStore />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
