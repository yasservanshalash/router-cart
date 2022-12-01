import React, { useState, useEffect} from 'react';
import ProductItem from './ProductItem'

import "./ProductList.css"

const url = 'https://fakestoreapi.com/products'

export default function ProductList({cartHandler, cart}) {
  const [items, setItems] = useState([]);

  function fetchItems() {
    fetch(url).then((response) => response.json()).then((items) => setItems(items)).catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchItems();
  }, [])

  return (
    <div>
      <h1 className='productListHeader'>Product List</h1>
      <div className='productList'>
        { items ?
          items.map((item) => {
            return (
              <ProductItem key={item.id} name={item.title} price={item.price} img={item.image} description={item.description} cartHandler={cartHandler} cart={cart}/>
            )
          }) : null
        }
      </div>
    </div>
  )
}