import { NavLink } from "react-router-dom";

export default function Footer(props) {
  const { foodsState, drinksState, dessertsState } = props.data;
  const [foods] = foodsState;
  const [drinks] = drinksState;
  const [desserts] = dessertsState;

  const isThereSelectedFood = foods.length > 0;
  const isThereSelectedDrink = drinks.length > 0;
  const isThereSelectedDessert = desserts.length > 0;

  const shouldEnableButton =
    isThereSelectedDessert && isThereSelectedDrink && isThereSelectedFood;

  return (
    <div class="footer">
      <button
        onClick={finishOrder}
        id="finishSelectionButton"
        disabled={!shouldEnableButton}
        to="/verify-orders"
      >
        {shouldEnableButton
          ? "Fechar Pedido"
          : "Selecione os 3 itens para fechar o pedido"}
      </button>
    </div>
  );

  function finishOrder() {
    saveOrderToLocalStorage();

    window.location.href = `/verify-order`;
  }

  function saveOrderToLocalStorage() {
    localStorage.setItem(
      "foodcampData",
      JSON.stringify([[...foods], [...drinks], [...desserts]])
    );
  }
}
