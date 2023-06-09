import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "./productSlice";
import cartReducer, { getTotal } from "./cartSlice";

 const store =configureStore({
    reducer:{
        products:productReducer,
        cart:cartReducer
    }
});
store.dispatch(productsFetch())
store.dispatch(getTotal())
export default store;