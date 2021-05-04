import FoodList from "./FoodList";
import DrinkList from "./DrinkList";
import DessertList from "./DessertList";

export default function Content() {
  return (
    <div class="content">
      <strong>Primeiro, seu prato</strong>
      <FoodList />
      <strong>Agora, sua bebida</strong>

      <DrinkList />
      <strong>Por fim, sua sobremesa</strong>

      <DessertList />
    </div>
  );
}
