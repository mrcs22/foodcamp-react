import FoodList from "./FoodList";
import DrinkList from "./DrinkList";
import DessertList from "./DessertList";

export default function Content(props) {
  const { foodsState, drinksState, dessertsState } = props.data;

  return (
    <div className="content">
      <strong>Primeiro, seu prato</strong>
      <FoodList state={foodsState} />
      <strong>Agora, sua bebida</strong>

      <DrinkList state={drinksState} />
      <strong>Por fim, sua sobremesa</strong>

      <DessertList state={dessertsState} />
    </div>
  );
}
