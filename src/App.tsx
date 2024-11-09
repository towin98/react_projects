import { useState } from "react";
import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.js";
import { ProductsProps, Product } from "./components/IProducts.ts";
import { Header } from "./components/Header.tsx";

function App() {

  // const [products] = useState(initialProducts)
  const [products] = useState<ProductsProps>({ products: initialProducts });
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products : ProductsProps) => {
    return products.products.filter((product: Product) => {
      return (
        product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
      )
    })
  }

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters = {setFilters}/>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
