import Header from "./components/Header";
import Landing from "./pages/Landing";
import VerifyOrder from "./pages/VerifyOrder";

import { useState } from "react";

export default function App() {
  const [shouldChangePage, setSholdChangePage] = useState(false);

  const foodsState = useState([]);
  const drinksState = useState([]);
  const dessertsState = useState([]);

  const states = { foodsState, drinksState, dessertsState, setSholdChangePage };

  return (
    <>
      <Header />
      {shouldChangePage ? (
        <VerifyOrder states={states} />
      ) : (
        <Landing states={states} />
      )}
    </>
  );
}
