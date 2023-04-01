import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
//import { ShoppingCart } from "../components/ShoppingCart";

type ShoppingCartChartProviderProps = {
  children: ReactNode;
};
type CartItemChart = {
  id: number;
  quantity: number;
};
type ShoppingCartContexChart = {
  openCartChart: () => void;
  closeCartChart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantitys: number;
  cartItems: CartItemChart[];
};

const ShoppingCartContextChart = createContext({} as ShoppingCartContexChart);

export function useShoppingCartChart() {
  return useContext(ShoppingCartContextChart);
}

export function ShoppingCartChartProvider({
  children,
}: ShoppingCartChartProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemChart[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  const cartQuantitys = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCartChart = () => setIsOpen(true);
  const closeCartChart = () => setIsOpen(false);
  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContextChart.Provider
      value={{
        openCartChart,
        closeCartChart,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantitys,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContextChart.Provider>
  );
}
