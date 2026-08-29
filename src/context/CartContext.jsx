import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };