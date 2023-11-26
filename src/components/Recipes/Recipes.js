import React, { useEffect, useState } from 'react';
import styles from './Recipes.module.css';
import RecipeModal from '../RecipeModal/RecipeModal';
import { recipeSelector, fetchRecipes, fetchSelectedRecipe } from '../../redux/recipeSlice'
import { useSelector, useDispatch } from 'react-redux';

const Recipes = () => {
    const dispatch = useDispatch();
    const {recipes, selectedRecipe} = useSelector(recipeSelector);
    useEffect(() => {
        // dispatch(fetchRecipes("cuisineType=Italian"));
    },[])

    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = async(url) => {
        dispatch(fetchSelectedRecipe(url));
         setModalOpen(true);
    };
  
    const closeModal = (url) => {
      setModalOpen(false);
    };
    
    // console.log(recipes)
   
  return (
   
    <div className={styles.recipesContainer}>
        
        {recipes.hits && recipes.hits.length > 0 && recipes.hits.map((recipe, index) => {
          return (
            <div key= {index}className={styles.recipe} onClick={()=>{openModal(recipe.recipe.uri)}}> 
               <img src={recipe.recipe.image} alt={recipe.label}/>
               <div className={styles.details}>
                    <p>{recipe.recipe.cuisineType}</p>
                    <p className={styles.label}>{recipe.recipe.label}</p>
                    <p>calories: {Math.floor(recipe.recipe.calories)}</p>
               </div>
               
           </div>

           )
        })}


        {/* Display the RecipeModal component */}
      {modalOpen && selectedRecipe && (
        <RecipeModal closeModal={closeModal} />
      )}

    </div>
  )
}

export default Recipes
