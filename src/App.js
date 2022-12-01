import React, {useState} from 'react'
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Home from './pages/Home';
import Cart from './pages/Cart'
function App() {
  const [cart, setCart] = useState([]);
  const cartHandler = (item) => {
    setCart([...cart, item]);
    console.log(cart)
  }

  return (
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home cartHandler={cartHandler} cart={cart}/>} />
      <Route path='/cart' element={<Cart cart={cart}/>} />
      </Routes>
    </div>
  )
}

export default App