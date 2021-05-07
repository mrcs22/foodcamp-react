import Header from "../components/Header";

export default function VerifyOrder({ states }) {
  const { foodsState, drinksState, dessertsState, setSholdChangePage } = states;

  let message = `Olá, gostaria de fazer o pedido:`;
  let total = 0;

  makeOrderData();

  return (
    <>
      <Header />
      <div className="delivery">
        <strong id="deliveryTitle">Revise seu pedido</strong>
        <div>
          {foodsState[0].map((food, i) => (
            <OrderItem
              key={i}
              name={food.title}
              counter={food.counter}
              price={food.price}
            />
          ))}
          {drinksState[0].map((drink, i) => (
            <OrderItem
              key={i}
              name={drink.title}
              counter={drink.counter}
              price={drink.price}
            />
          ))}
          {dessertsState[0].map((dessert, i) => (
            <OrderItem
              key={i}
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
    registerOrdersAndUpdateTotal(foodsState[0], "Prato");
    registerOrdersAndUpdateTotal(drinksState[0], "Bebida");
    registerOrdersAndUpdateTotal(dessertsState[0], "Sobremesa");

    message += `\nTotal: R$ ${total.toFixed(2)}`;

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
    foodsState[1]([]);
    drinksState[1]([]);
    dessertsState[1]([]);
    setSholdChangePage(false);
  }
}
