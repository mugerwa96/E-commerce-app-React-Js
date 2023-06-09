import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem('cart-e') ? JSON.parse(localStorage.getItem('cart-e')) : [],
    totalCartItems: 0,
    totalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id == action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity++
                toast.success(`${action.payload.title} quantity  increased `)
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
                toast.success(`${action.payload.title} added to cart`)
            }
            localStorage.setItem('cart-e', JSON.stringify(state.cartItems))
        },

        incrementCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id == action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity++
                toast.info(`${action.payload.title} quantity  increased `)
            }
            localStorage.setItem('cart-e', JSON.stringify(state.cartItems))
        },
        decrementCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id == action.payload.id)
            if (itemIndex >= 0) {
                if (state.cartItems[itemIndex].quantity == 1) {
                    const newCart = state.cartItems.filter(item => item.id != action.payload.id)
                    state.cartItems = newCart;
                    toast.error(`${action.payload.title} removed from cart `)
                } else {

                    state.cartItems[itemIndex].quantity--
                    toast.info(`${action.payload.title} quantity  decreased `)
                }

            }
            localStorage.setItem('cart-e', JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id == action.payload.id)
            if (itemIndex >= 0) {

                const newCart = state.cartItems.filter(item => item.id != action.payload.id)
                state.cartItems = newCart;
                toast.error(`${action.payload.title} removed from cart `)

                localStorage.setItem('cart-e', JSON.stringify(state.cartItems))
            }
        },

        clearCart(state, action) {

            state.cartItems = [];
            toast.error(`Cart cleared `)

            localStorage.setItem('cart-e', JSON.stringify(state.cartItems))
        },

        getTotal(state,action){

             const{cartTotalPrice,quantityTotal }=  state.cartItems.reduce((total,cartItems)=>{

                        const{price,quantity}=cartItems;
                        let totalPrice=(price*quantity);
                        total.cartTotalPrice+=totalPrice;

                        let totalItems=quantity;
                        total.quantityTotal+=totalItems;

                        return total;
                },
                {
                    cartTotalPrice:0,
                    quantityTotal:0
                }
                )
             state.totalAmount=cartTotalPrice;
             state.totalCartItems=quantityTotal;   

        }
    }
})
export default cartSlice.reducer;
export const { addToCart, incrementCart, decrementCart, removeFromCart, clearCart ,getTotal} = cartSlice.actions
