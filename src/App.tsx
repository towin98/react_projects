import { products as initialProducts } from "./mocks/products.json";
import { Products } from "./components/Products.js";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { Cart } from "./components/Cart.tsx";
import { useFilters } from "./hooks/useFilters.ts";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
