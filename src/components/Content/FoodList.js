import CardItem from "./CardItem";
import fakeHttpClient from "../../fakeHttpClient";

export default function FoodList() {
  const foods = fakeHttpClient.GET("www.my-fake-something/foods.com");

  return (
    <ul className="options" id="foods">
      {foods.map((f) => (
        <CardItem
          image={f.image}
          title={f.title}
          description={f.description}
          price={f.price}
        />
      ))}
    </ul>
  );
}
