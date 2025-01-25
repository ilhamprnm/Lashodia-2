import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";


export const fetchAllProduct = createAsyncThunk (
  "product/allProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/allproducts")

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const productSlice = createSlice({
  name: 'product',
  initialState : {
    allProduct: [],
    loading: false,
    success: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder 
      .addCase(fetchAllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.allProduct = action.payload
      })
      .addCase(fetchAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default productSlice.reducer