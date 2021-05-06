import Header from "./components/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const foodsState = useState([]);
  const drinksState = useState([]);
  const dessertsState = useState([]);

  const states = { foodsState, drinksState, dessertsState };

  return (
    <>
      <Header />
      <Content data={states} />
      <Footer data={states} />
    </>
  );
}

/*
 <div class="cover ocult"></div>

      <div class="delivery ocult">
        <strong id="deliveryTitle">Confirme seu pedido</strong>

        <p>
          <span id="foodName"></span>
          <span id="foodPrice"></span>
        </p>
        <p>
          <span id="drinkName"></span>
          <span id="drinkPrice"></span>
        </p>
        <p>
          <span id="dessertName"></span>
          <span id="dessertPrice"></span>
        </p>
        <p>
          <strong>Total</strong>
          <span id="TotalPrice"></span>
        </p>

        <button id="order">Tudo certo, pode pedir!</button>
        <strong id="cancel">Cancelar</strong>
      </div>
  
 */
