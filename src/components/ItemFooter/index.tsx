interface PropsItemFooter {
  className: string;
  title: string;
  isParagraph?: boolean;
}

export function ItemFooter({ className, title, isParagraph }: PropsItemFooter) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {isParagraph == true ? (
        <div>
          <p>Olá Mundo</p>
        </div>
      ) : (
        <nav>
          <a href="#">Sobre</a>
          <a href="#">Contactos</a>
        </nav>
      )}
    </div>
  );
}
