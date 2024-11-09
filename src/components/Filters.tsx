import { useState } from "react";
import {  } from "./Filters.css";

export function Filters ( { changeFilters }: any ){

    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (event:any) => {
        setMinPrice(event.target.value)
        changeFilters((prevState: any) => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event:any) => {
        changeFilters((prevState: any) => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <input 
                    type="range" 
                    id="price" 
                    min="0" 
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>{minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category" onChange={handleChangeCategory}>
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