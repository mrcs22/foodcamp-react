import CardItem from "./CardItem";
import fakeHttpClient from "../../fakeHttpClient";

export default function DessertList(props) {
  const desserts = fakeHttpClient.GET("www.my-fake-something/desserts.com");

  return (
    <ul className="options" id="desserts">
      {desserts.map((d) => (
        <CardItem
          image={d.image}
          title={d.title}
          description={d.description}
          price={d.price}
          state={props.state}
        />
      ))}
    </ul>
  );
}
