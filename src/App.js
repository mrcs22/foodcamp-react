import Routes from "./routes";

import { useState } from "react";

export default function App() {
  const foodsState = useState([]);
  const drinksState = useState([]);
  const dessertsState = useState([]);

  const states = { foodsState, drinksState, dessertsState };

  return <Routes states={states} />;
}
