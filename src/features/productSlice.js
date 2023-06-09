import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    items:[],
    status:null
}
export const productsFetch= createAsyncThunk("products/productsFetch",()=> 
axios.get('https://fakestoreapi.com/products')
.then(res=>(res.data))
)

const productSlice= createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [productsFetch.pending]:(state,action)=>{
                state.status="pending"
        },
        [productsFetch.fulfilled]:(state,action)=>{
                state.status="success";
                state.items=action.payload
          
        },
        [productsFetch.rejected]:(state,action)=>{
             state.status="rejected";
        },
    }
});
export default productSlice.reducer;
