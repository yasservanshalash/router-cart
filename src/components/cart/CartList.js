import React from "react";
import CartItem from "./CartItem"
export default function CartList(props) {
  console.log(props)
  return <div>
    <h1>Cart List</h1>
    { props.cart ?
          props.cart.map((item) => {
            return (
              <CartItem name={item.name} price={item.price} />
            )
          }) : null
        }
  </div>;
}
