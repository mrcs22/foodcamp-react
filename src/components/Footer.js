export default function Footer(props) {
  const { foodsState, drinksState, dessertsState } = props.data;

  const isThereSelectedFood = foodsState[0].length > 0;
  const isThereSelectedDrink = drinksState[0].length > 0;
  const isThereSelectedDessert = dessertsState[0].length > 0;

  const shouldEnableButton =
    isThereSelectedDessert && isThereSelectedDrink && isThereSelectedFood;

  return (
    <div class="footer">
      <button id="finishSelectionButton" disabled={!shouldEnableButton}>
        Selecione os 3 itens para fechar o pedido
      </button>
    </div>
  );
}
