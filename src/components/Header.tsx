import { Filters } from "./Filters.tsx";

export function Header({ changeFilters } :any){
    return (
        <header>
            <h1>React Shop</h1>
            <Filters changeFilters = {changeFilters}/>
        </header> 
    )
}