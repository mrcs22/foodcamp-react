export default function Counter(props) {
  const { value, setValue } = props;
  return (
    <div className="counter">
      <button onClick={() => setValue(value - 1)}>-</button>
      {value}
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  );
}
