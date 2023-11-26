import React, { useEffect, useState } from 'react';
import styles from './Recipes.module.css';
import RecipeModal from '../RecipeModal/RecipeModal';
import { recipeSelector, actions, fetchSelectedRecipe } from '../../redux/recipeSlice'
import { useSelector, useDispatch } from 'react-redux';
import { Circles } from 'react-loader-spinner';


const Recipes = () => {
    const dispatch = useDispatch();
    const {recipes} = useSelector(recipeSelector);
    const {resetRecipe} = {...actions};
    const [modalOpen, setModalOpen] = useState(false);
  
    const openModal = async(url) => {
        dispatch(fetchSelectedRecipe(url));
         setModalOpen(true);
    };
  
    const closeModal = (url) => {
      setModalOpen(false);
    };

    // Reset the recipe state when the component unmounts. This is to ensure that the recipe state is reset when the user navigates to a different page. This is important because the recipe state is used to display the recipe details in the RecipeModal component. If the recipe state is not reset, the RecipeModal
    useEffect(() => {
        return () => {dispatch(resetRecipe())}
    },[])

      // show loading animation if recipe is not loaded yet
    if (recipes && recipes.length === 0) {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Circles
              height={80}
              width={80}
              color="#4fa94d"
              ariaLabel="circles-loading"
              visible={true}
            />
          </div>
        );
      }
      
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
      {modalOpen && recipes && (
        <RecipeModal closeModal={closeModal} />
      )}

    </div>
  )
}

export default Recipes
