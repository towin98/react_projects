import './Products.css'
import { ProductsProps } from "./IProducts.ts";
import { AddToCartIcon } from './Icons.js'

export function Products({ products }:ProductsProps ) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon></AddToCartIcon>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}