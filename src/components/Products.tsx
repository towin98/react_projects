import './Products.css'
import { Product } from "./IProducts.ts";
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.js'
import { useCart } from "../hooks/useCart.tsx";

interface ProductsProps {
    products: Product[];
}

export function Products({ products }:ProductsProps ) {

    const { addToCart, removeFromCart, cart }:any = useCart();

    const checkProductInCart = (product:Product) => {
        return cart.some((item:Product) => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map((product:Product) => {

                    const isProductInCart:boolean = checkProductInCart(product)

                    return(
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button style={{backgroundColor: isProductInCart ? "red" : "green" }} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                    {
                                        isProductInCart
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}