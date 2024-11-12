import './Products.css'
import { Product } from "./IProducts.ts";
import { AddToCartIcon } from './Icons.js'

interface ProductsProps {
    products: Product[];
}

export function Products({ products }:ProductsProps ) {
    return (
        <main className='products'>
            <ul>
                {products.map((product:Product) => (
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