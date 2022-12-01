import React, { useEffect } from "react";
import "./ProductItem.css"
export default function ProductItem({ key, name, price, image, description, cartHandler, cart}) {
const onClickHandler = () => {
  console.log("clicked")
  cartHandler([{name: name, price: price, image: image, description: description}]  )
}
  
return (
<div className="productItem" key={key} id={key}>
      <h2>{name}</h2>
      <p>${price}</p>
      <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt={name} />
      <button className="addToCartBtn" onClick={onClickHandler}>ADD TO CART</button>
      <p>{description}</p>
  </div>
)
}