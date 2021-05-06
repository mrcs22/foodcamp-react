import { useState } from "react";
import Counter from "./Counter";

export default function CardItem(props) {
  const { image, title, description, price, state } = props;
  const [counter, setCounter] = useState(1);
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItemList, setSelectedItemList] = state;
  const position = selectedItemList.findIndex((item) => item.title === title);

  checkForResetSelection();
  checkForSelectedItemListUpdate();

  return (
    <li
      onClick={(event) => {
        handleSelection(event);
      }}
      className={isSelected ? "selected" : ""}
    >
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

  function handleSelection(event) {
    if (isSelected) {
      setIsSelected(false);
      setSelectedItemList(
        selectedItemList.filter((_, index) => index !== position)
      );
    } else {
      setIsSelected(true);

      setSelectedItemList([...selectedItemList, { title, price, counter }]);
    }
  }

  function checkForResetSelection() {
    if (counter < 1) {
      setIsSelected(false);
      handleSelection();
      setCounter(1);
    }
  }

  function checkForSelectedItemListUpdate() {
    const shouldUpdate =
      counter > 1 && selectedItemList[position].counter !== counter;

    if (shouldUpdate) {
      setSelectedItemList(
        selectedItemList.map((item, index) => {
          if (index === position) {
            return { title, price, counter };
          }
          return item;
        })
      );
    }
  }
}
