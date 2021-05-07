export default function Footer(props) {
  const {
    foodsState,
    drinksState,
    dessertsState,
    setSholdChangePage,
  } = props.data;
  const [foods] = foodsState;
  const [drinks] = drinksState;
  const [desserts] = dessertsState;

  const isThereSelectedFood = foods.length > 0;
  const isThereSelectedDrink = drinks.length > 0;
  const isThereSelectedDessert = desserts.length > 0;

  const shouldEnableButton =
    isThereSelectedDessert && isThereSelectedDrink && isThereSelectedFood;

  return (
    <div className="footer">
      <button
        onClick={() => setSholdChangePage(true)}
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
}
