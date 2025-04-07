import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../lib/axios";


export const fetchCartData = createAsyncThunk (
  "user/getCartData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/cart/getcartdata",
        {
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
      })

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const addToCart = createAsyncThunk (
  "user/addToCart",
  async (dataProduct, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/cart/addtocart", dataProduct, {
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
      })

      alert("Product Added")

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const removeFromCart = createAsyncThunk (
  "user/removeToCart",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/api/cart/removefromcart", product, {
        headers: {
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
      })

      alert('Product Deleted')

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState : {
    userData: [],
    cartData: [],
    loading: false,
    success: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder 
      .addCase(fetchCartData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartData.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = action.payload
      })
      .addCase(fetchCartData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = action.payload
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartData = action.payload
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

export default userSlice.reducer