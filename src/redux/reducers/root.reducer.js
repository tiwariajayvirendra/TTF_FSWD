import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./product.reducer";

export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer, // Ensure the product reducer is combined
});
