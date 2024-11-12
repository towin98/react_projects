import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import "./Cart.css"

export function Cart() {
  const cartCheckboxId = useId()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden/>

      <aside className="cart">
        <ul>
          {
            
          }

          {/* <li>
            <img 
              src="https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png" alt="product"
              />
              <div>
                <strong>iPhone</strong> - $1499
              </div>

              <footer>
                <small>
                  Qty: 1
                </small>
                <button>+</button>
              </footer>
          </li> */}
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}