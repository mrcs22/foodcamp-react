import FoodList from "./FoodList";
import DrinkList from "./DrinkList";
import DessertList from "./DessertList";

export default function Content(props) {
  const { foodsState, drinksState, dessertsState } = props.data;

  console.clear();
  console.log("comida");
  console.log(foodsState[0]);

  console.log("bebida");
  console.log(drinksState[0]);

  console.log("sobremesa");
  console.log(dessertsState[0]);

  return (
    <div class="content">
      <strong>Primeiro, seu prato</strong>
      <FoodList state={foodsState} />
      <strong>Agora, sua bebida</strong>

      <DrinkList state={drinksState} />
      <strong>Por fim, sua sobremesa</strong>

      <DessertList state={dessertsState} />
    </div>
  );
}
