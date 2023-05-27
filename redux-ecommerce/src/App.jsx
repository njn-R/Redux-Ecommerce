import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { ADDTOCART, REMOVEFROMCART } from './store/action'

function App() {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart)
  const total = useSelector((state) => state.total)

  const handleProductChange = (event) => {
    const selectedProduct = products[event.target.selectedIndex]
    dispatch(ADDTOCART(selectedProduct))
  }
  const handleCartDelete = (index, price) => {
    const deleteItem = { index, price}
    dispatch(REMOVEFROMCART(deleteItem))
  }

  return (
    <>
      <div>
        <h1>Products</h1>
        <select onChange={handleProductChange}>
          {products.map((product, index) => (
            <option value={product.price} key={index}>
              {product.name}:{product.price}
            </option>
          ))}
        </select>
        <hr />
        <h2>Cart</h2>
        {carts.map((cart, index) => (
          <li key={index} onClick={() => handleCartDelete(index, cart.price)}>
            {cart.name}
          </li>
        ))}
        <hr />
        <h2>Total</h2>
        <h3>${total}</h3>
      </div>
    </>
  )
}

export default App
