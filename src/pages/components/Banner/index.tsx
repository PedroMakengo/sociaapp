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
        </div>
      </div>
    </div>
  );
}
