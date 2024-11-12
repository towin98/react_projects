import { useContext } from "react"
import { Product } from "../components/IProducts"
import { FiltersContext } from "../context/filters.tsx";

export function useFilters() {
    const {filters, setFilters}:any = useContext(FiltersContext)
  
    const filterProducts = (products: Product[]) => {
      return products.filter((product: Product) => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
    return { filters, filterProducts, setFilters }
  }