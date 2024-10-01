import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Product: [],
}
const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {
       getdata: (state, action) => {
        state.Product = action.payload

       }}
    })
export const { getdata } = productSlice.actions
export default productSlice.reducer