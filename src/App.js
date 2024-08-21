import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main className="App">
      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
