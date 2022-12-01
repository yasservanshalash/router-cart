import React from "react";
import ProductList from "../components/product/ProductList";
import "./Home.css"
export default function Home({cartHandler, cart}) {

  return (
    <div className="home">
      <ProductList cartHandler={cartHandler} cart={cart}/>
    </div>
  );
}