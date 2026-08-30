import { createContext, useEffect, useReducer } from "react";
import cartReducer from "./cartReducer";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    [],
    () => {
      const savedCart = localStorage.getItem("cart");

      try {
        if (savedCart) {
          return JSON.parse(savedCart);
        }
      } catch (error) {
        console.log("Could not load cart", error);
      }

      return [];
    }
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}