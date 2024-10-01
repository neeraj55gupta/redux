// import { configureStore } from '@reduxjs/toolkit'
// import productSlice from "./reducer/productreducer.js"
// export const store = configureStore({
//   reducer: {
//   productStore: productSlice
// }},
// )
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productreducer.js"
export const store = configureStore({
    reducer:{ 
productStore: productSlice
    }

})