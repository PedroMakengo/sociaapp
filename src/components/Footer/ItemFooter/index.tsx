interface PropsItemFooter {
  className: string;
  title: string;
  isParagraph?: boolean;
  paragraph?: string;
}

export function ItemFooter({
  className,
  title,
  isParagraph,
  paragraph,
}: PropsItemFooter) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {isParagraph == true ? (
        <div>
          <p>{paragraph}</p>
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
