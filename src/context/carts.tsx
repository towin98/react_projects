import { createContext, useState } from "react";
import { Product } from "../components/IProducts";

// 1. Crear contexto
export const CartContext = createContext({});

// 2. Crear provider
export function CartProvider ({children}: any){
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product:any) => {
        setCart([...cart, product])
    }

    const clearCart = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}