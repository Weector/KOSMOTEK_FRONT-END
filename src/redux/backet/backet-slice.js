import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  basketProducts: [],
};

const basketProducts = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: {
      reducer(state, action) {
        state.basketProducts.push(action.payload);
      },
      prepare(id, count) {
        return {
          payload: {
            id,
            count,
          },
        };
      },
    },
    deleteBasket(state, action) {
      const index = state.basketProducts.findIndex(
        (product) => product.id === action.payload
      );
      state.basketProducts.splice(index, 1);
    },
    plusCount: {
      reducer(state, action) {
        for (const product of state.basketProducts) {
          if (product.id === action.payload) {
            product.count += 1;
            break;
          }
        }
      },
    },
    minusCount: {
      reducer(state, action) {
        for (const product of state.basketProducts) {
          if (product.id === action.payload) {
            product.count -= 1;
            break;
          }
        }
      },
    },
    getBasket(state, action) {
      state.basketProducts = action.payload;
    },
  },
});

export const basketProductsReducer = basketProducts.reducer;
export const {
  addBasket,
  getBasket,
  plusCount,
  minusCount,
  deleteBasket,
} = basketProducts.actions;
