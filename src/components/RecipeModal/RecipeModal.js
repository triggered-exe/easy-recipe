import React, { useEffect } from 'react';
import styles from './RecipeModal.module.css';
import { actions, recipeSelector } from '../../redux/recipeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Circles } from 'react-loader-spinner';

const RecipeModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { selectedRecipe } = useSelector(recipeSelector);
  const { resetSelectedRecipe, fetchSelectedRecipe } = actions;

  // reset the selectedrecipe 
  useEffect(() => {
    return () => {
      dispatch(resetSelectedRecipe());
    };
  }, []);

  
  // show loading animation if recipe is not loaded yet
  if (!selectedRecipe || selectedRecipe.length === 0) {
    console.log('Loading...');
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

  console.log(selectedRecipe);
  const recipe = selectedRecipe.hits[0].recipe;
  console.log(recipe);

  
  const displayNutrients = () => {
    return Object.keys(recipe.totalNutrients).map((key, index) => {
      const { label, quantity, unit } = recipe.totalNutrients[key];
      return (
        <li key={index}>
          <span style={{ color: "red" }}>{label}</span>: {`${quantity.toFixed(2)} ${unit}`}
        </li>
      );
      
    });
  };


  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={closeModal}>&times;</span>
        <h1>{recipe.label}</h1>
        <div className={styles.recipeHead}>
          <div className={styles.recipeImage}>
            <img src={recipe.image} alt={recipe.label} />
          </div>
        </div>

        <div className={styles.details}>
           {/* ingredients info */}
          <div className={styles.ingredients}>
            <h1 style={{color:"Green", textDecoration:"underline"}}>Ingredients:</h1>
            <ul>
              {recipe.ingredientLines.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
                {/* preparation info */}
            <div className={styles.preparation}>
            <h1 style={{color:"Green", textDecoration:"underline"}}>Preparation:</h1>
            <a href={recipe.url}><button >Instructions</button></a>  <label>by {recipe.source} </label>
            </div>
          </div>
          {/* nutrition info */}
          <div className={styles.nutritions}>
            <h1 style={{color:"Green", textDecoration:"underline"}}>Nutrition:</h1>
            <ul>
              {displayNutrients()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;