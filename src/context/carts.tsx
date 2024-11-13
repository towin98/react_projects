import { createContext, useState } from "react";
import { Product } from "../components/IProducts";

// 1. Crear contexto
export const CartContext = createContext({});

// 2. Crear provider
export function CartProvider ({children}: any){
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product:Product) => {
        const productCardIndex = cart.findIndex(item => item.id === product.id)

        if (productCardIndex >= 0) {
            const newCart:any = structuredClone(cart)
            newCart[productCardIndex].quantity += 1;
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity : 1
            }
        ]))
    }

    const removeFromCart = (product:Product) => {
        setCart(prevState => prevState.filter((item:Product) => item.id != product.id))
    }


    const clearCart = () =>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}