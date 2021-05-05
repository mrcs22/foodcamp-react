import CardItem from "./CardItem";
import fakeHttpClient from "../../fakeHttpClient";

export default function DrinkList() {
  const drinks = fakeHttpClient.GET("www.my-fake-something/drinks.com");
  return (
    <ul className="options" id="drinks">
      {drinks.map((d) => (
        <CardItem
          image={d.image}
          title={d.title}
          description={d.description}
          price={d.price}
        />
      ))}
    </ul>
  );
}
