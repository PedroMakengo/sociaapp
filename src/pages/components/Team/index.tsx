import { Button } from "../Button";
import style from "./style.module.scss";

export function Team() {
  return (
    <section className={style.team}>
      <div className={style.container}>
        <div className={style.teamdescribe}>
          <h1>Nossa Equipa</h1>
          <div>
            <p>
              Há 3 anos no mercado da tecnologia, ajudamos as pessoas nas mais
              diversas áreas de inovação. Desenvolvemos SOFTWARES de alta
              qualidade, transformando os problemas das pessoas no maior
              conforto digital!!!
            </p>
            <p>
              O nome “Sócia” vem da prática comum usada por alguns compradores
              em armazéns. Associar-se a outras pessoas com a intenção de
              repartir o valor total da factura e na mesma medida as unidades do
              produto.
            </p>
            <a href="https://www.inokri.com/" target="_blank" rel="noreferrer">
              Mais informações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
