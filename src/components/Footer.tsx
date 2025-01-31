import './Footer.css'
import { useFilters } from "../hooks/useFilters";
import { useCart } from '../hooks/useCart';

export function Footer() {
  const { filters } = useFilters()
  const { cart }:any = useCart()

  return (
    <footer className='footer'>
      {/* {
        JSON.stringify(filters)
      } */}

      {/* {
        JSON.stringify(cart, null, 2)
      } */}
      <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}