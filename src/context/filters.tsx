import { createContext, useState } from "react";

export const FiltersContext = createContext({});

export function FiltersProvider({children} :any){
    const [filters, setFilters] = useState({
        category : 'fragrances',
        minPrice : 100
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}