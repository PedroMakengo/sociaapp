import style from "./style.module.scss";

export function Contact() {
  return (
    <section className={style.contacts} id="contactos">
      <div className={style.container}>
        <div className={style.map}>
          <h1>LOCALIZAÇÃO</h1>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31525.346771079952!2d13.249425652352668!3d-9.002633299367208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f3bcf66098a5%3A0xeaeb41d0529d9c14!2sCENTRALIDADE%20DO%20KILAMBA!5e0!3m2!1spt-PT!2sao!4v1630506452924!5m2!1spt-PT!2sao"
              loading="lazy"
              className={style.mapa}
            ></iframe>
          </div>
        </div>
        <div className={style.contact}>
          <form action=""></form>
        </div>
      </div>
    </section>
  );
}
