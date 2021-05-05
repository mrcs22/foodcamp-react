import { useState } from "react";
import Counter from "./Counter";
export default function CardItem(props) {
  const { image, title, description, price } = props;
  const [counter, setCounter] = useState(1);

  return (
    <li>
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
}
