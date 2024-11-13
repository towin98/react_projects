import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css"
import { useCart } from "../hooks/useCart";
import { Product } from "./IProducts";

function CartItem({thumbnail, price, title, quantity, addToCart }:any ){
  return (
    <li>
      <img 
        src={thumbnail} 
        alt={title} />

        <div>
          <strong>{title}</strong> - ${price}
        </div>

        <footer>
          <small>
            Qty: {quantity}
          </small>
          <button onClick={addToCart}>+</button>
        </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, addToCart, removeFromCart, clearCart }:any = useCart()
  console.log(cart)
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden/>

      <aside className="cart">
        <ul>
          {cart.map((product:Product) => (
            <CartItem 
              key={product.id}
              thumbnail = {product.thumbnail}
              price = {product.price}
              title = {product.title}
              quantity = {product?.quantity}
              addToCart={() => addToCart(product)}
              >
              </CartItem>  
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}