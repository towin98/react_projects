import { useId } from "react";
import "./Filters.css";
import { useFilters } from "../hooks/useFilters";

export function Filters (){

    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event:any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event:any) => {
        setFilters((prevState: any) => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input 
                    type="range" 
                    id={minPriceFilterId} 
                    min="0" 
                    max="1000"
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                <span>{filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
                    <option value="all">Todas</option>
                    <option value="groceries">comestibles</option>
                    <option value="fragrances">Fragancias</option>
                    <option value="beauty">belleza</option>
                    <option value="furniture">muebles</option>
                </select>
            </div>
        </section>
    )
}