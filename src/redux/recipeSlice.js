import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useNavigate} from 'react-router-dom';

const initialState = {
    searchUrl : '',
    recipes : [],
    recipe:[]
  };

  const appId = process.env.REACT_APP_APP_ID || "c19433fe";
  const appKey = process.env.REACT_APP_APP_KEY || "5c2d1f632bbf97a4b03f35cbd607eb37";

 const recipeSlice  = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setRecipe(state, action) {
            state.recipes = action.payload;
        },
        setSelectedRecipe(state, action) {
            state.selectedRecipe = action.payload;
        },
        resetSelectedRecipe(state, action) {
            state.selectedRecipe = "";
        },
    }
})


export const fetchRecipes = createAsyncThunk('recipe/fetchRecipes', async (searchString, thunkAPI) => {
    try{
        let url = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${appId}&app_key=${appKey}&${searchString}`
        const response = await fetch(url);
        const data = await response.json();
        thunkAPI.dispatch(actions.setRecipe(data));
        console.log(data)
    }catch(err){
        console.log(err)
    }
})

export const fetchSelectedRecipe = createAsyncThunk('recipe/fetchSelectedRecipe', async (uri, thunkAPI) => {
    try {
        const encodedURI = encodeURIComponent(uri);
        const baseURL = 'https://api.edamam.com/api/recipes/v2/by-uri';
        const fullURL = `${baseURL}?type=public&uri=${encodedURI}&app_id=${appId}&app_key=${appKey}`;
    
        const response = await fetch(fullURL);
        const data = await response.json();
        thunkAPI.dispatch(actions.setSelectedRecipe(data));
    } catch (err) {
        console.log(err);
    }
})



export const recipeReducer = recipeSlice.reducer;

export const actions = recipeSlice.actions;
 
export const recipeSelector = state => state.recipeReducer;