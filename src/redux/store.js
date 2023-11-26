import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";

import { recipeReducer } from "./recipeSlice";
export const store = configureStore({
  reducer: {
    recipeReducer
  },
  middleware: [...getDefaultMiddleware()]
})