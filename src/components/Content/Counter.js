export default function Counter(props) {
  const { value, setValue } = props;
  return (
    <div className="counter">
      <button
        onClick={(event) => {
          setValue(value - 1);
          event.stopPropagation();
        }}
      >
        -
      </button>
      {value}
      <button
        onClick={(event) => {
          setValue(value + 1);
          event.stopPropagation();
        }}
      >
        +
      </button>
    </div>
  );
}
