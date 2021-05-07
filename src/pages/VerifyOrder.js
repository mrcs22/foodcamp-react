import Header from "../components/Header";

export default function VerifyOrder({ states }) {
  const orders = JSON.parse(localStorage.getItem("foodcampData"));

  const [foods, drinks, desserts] = orders;

  let message = `Olá, gostaria de fazer o pedido:`;
  let total = 0;

  console.clear();
  console.log(foods);

  makeOrderData();

  return (
    <>
      <Header />
      <div className="delivery">
        <strong id="deliveryTitle">Revise seu pedido</strong>
        <div>
          {foods.map((food) => (
            <OrderItem
              name={food.title}
              counter={food.counter}
              price={food.price}
            />
          ))}
          {drinks.map((drink) => (
            <OrderItem
              name={drink.title}
              counter={drink.counter}
              price={drink.price}
            />
          ))}
          {desserts.map((dessert) => (
            <OrderItem
              name={dessert.title}
              counter={dessert.counter}
              price={dessert.price}
            />
          ))}

          <p>
            <strong>Total</strong>
            <span>R$ {total.toFixed(2)}</span>
          </p>
        </div>
        <button onClick={sendOrder}>Tudo certo, pode pedir!</button>
        <strong onClick={cancelOrder}>Cancelar</strong>
      </div>
    </>
  );

  function OrderItem({ name, price, counter }) {
    return (
      <p>
        <span>
          {name} ({counter}x)
        </span>
        <span>{price}</span>
      </p>
    );
  }

  function makeOrderData() {
    registerOrdersAndUpdateTotal(foods, "Prato");
    registerOrdersAndUpdateTotal(drinks, "Bebida");
    registerOrdersAndUpdateTotal(desserts, "Sobremesa");

    message += `\nTotal: R$ ${total.toFixed(2)}`;
    console.log(message);
    message = encodeURIComponent(message);
  }

  function registerOrdersAndUpdateTotal(ordersArr, orderType) {
    ordersArr.forEach(({ title, price, counter }) => {
      message += `\n- ${orderType}: ${title} (${counter}x)`;
      total += formatValue(price) * counter;
    });
  }

  function formatValue(value) {
    value = value.split("$")[1];
    value = value.replace(",", ".");
    return parseFloat(value);
  }

  function sendOrder() {
    window.location.href = `https://wa.me/+5555996880556?text=${message}`;
  }

  function cancelOrder() {
    window.location.href = "/";
  }
}
