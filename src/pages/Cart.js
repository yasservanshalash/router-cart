import React from "react";
import CartList from "../components/cart/CartList";
export default function Cart(props) {
  return <div>
          <CartList cart={props.cart.flat()}/>
  </div>;
}
