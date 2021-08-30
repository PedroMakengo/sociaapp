export function Button(props) {
  return (
    <button>
      <span>{props.icon}</span>
      {props.title}
    </button>
  );
}
