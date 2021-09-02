export function ItemRecursos(props) {
  return (
    <div className={props.className}>
      <div>{props.icon}</div>
      <h1>{props.title}</h1>
      <span>{props.paragraph}</span>
    </div>
  );
}
