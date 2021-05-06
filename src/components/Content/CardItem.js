import { useState } from "react";
import Counter from "./Counter";

export default function CardItem(props) {
  const { image, title, description, price } = props;
  const [counter, setCounter] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  checkForResetSelection();

  return (
    <li onClick={toggleSelection} className={isSelected ? "selected" : ""}>
      <img src={image} alt={title} />
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
        <p>
          {price} <Counter value={counter} setValue={setCounter} />
        </p>
      </div>
    </li>
  );

  function toggleSelection() {
    isSelected ? setIsSelected(false) : setIsSelected(true);
  }

  function checkForResetSelection() {
    if (counter < 1) {
      toggleSelection();
      setCounter(1);
    }
  }
}
