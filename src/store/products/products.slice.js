import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (thunkAPI) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      return response.data; // payload
    } catch (error) {
      thunkAPI.rejectWithValue("Error loading products") // 가장 하단 action.payload로 이동
    }
  }
)

const initialState = {
  products: [],
  isLoading: false,
  error: "",
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  // reducer를 추가하면 프로미스의 진행 상태에 따라서 리듀서를 실행할 수 있습니다.
  extraReducers: (builder) => {
    builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload; // product data
        })
        // reject
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
}
})

export default productsSlice.reducer;