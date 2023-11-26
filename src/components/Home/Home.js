import React from 'react'
import styles  from './Home.module.css'
import {useNavigate} from 'react-router-dom';
import {fetchRecipes } from '../../redux/recipeSlice'
import {  useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div className={styles.Home}>
      <section className={styles.pictureContainer}>
        <div className={styles.textInsideClip}>
            
            <p>Ageless Flavors:</p>
            <p> Recipes that Speak to Your Heart,</p>
            <p> Explore, Search, and Savor Nutritious Delights</p>
        </div>
      </section>
      <hr></hr>
      <section className={styles.recipesVarietiesContainer}>

        {/* cuisines */}
        <div className={styles.recipesVarieties}>
            <div className={styles.header}>
                Cuisines
            </div>

            <div className={styles.cardsContainer}>
                 <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("cuisineType=Indian")); navigate('/home/recipes')}}>
                     <img src="https://cdn.pixabay.com/photo/2021/02/28/09/38/food-6056720_640.jpg" alt="" /> 
                     <p>Indian</p>
                 </div>
          
  
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("cuisineType=Italian")); navigate('/home/recipes')}}>
                <img src="https://lh6.googleusercontent.com/XLd8i1p1HQ5_3nJmymY0pRuia13ZFCxaG2coMvcRXDtzlE9HbthENnxPf2CO7MEbQpmjH0pXQT28BCITYs7aGRMdz36dfgBZU0nvt1eQ8M0XdaOXnDJOejv3M8UMHyRbVT8CXdxrjQAXTXAQMPke0BU" alt="" /> 
                <p>Italian</p>
            </div>

            
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("cuisineType=Mexican")); navigate('/home/recipes')}}>
                <img src="https://lh6.googleusercontent.com/Do6DtXylFh6Hud7cm94kt2CtlKXh7DrNT4vO8KF7E2bl0W9pxhiLMxCo8NTp72CjoTeewywDwc4Aqekb7XCNJmhD2Qc2rjz4rJ_aO9ljfHHa2Y9Tk9SMvWWLpVtn0iv8sTi8k0znPGZNIAn_kGS03h8" alt="" /> 
                <p>Mexican</p>
            </div>


            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("cuisineType=Middle Eastern")); navigate('/home/recipes')}}>
                <img src="https://media.istockphoto.com/id/950253138/photo/middle-eastern-arabic-or-mediterranean-dinner-table-with-grilled-lamb-kebab-chicken-skewers.jpg?s=2048x2048&w=is&k=20&c=qeXiE60xzCgOkLsOfP4eVL009LJ6RLBj28gn6WWblW8=" alt="" /> 
                <p>Middle Eastern</p>
            </div>
         
        </div>
      </div>

      {/* Diet */}

      <div className={styles.recipesVarieties}>
            <div className={styles.header}>
            Diet
            </div>

            <div className={styles.cardsContainer}>
                 <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("diet=balanced")); navigate('/home/recipes')}}>
                     <img src="https://media.istockphoto.com/id/1433432507/photo/healthy-eating-plate-with-vegan-or-vegetarian-food-in-woman-hands-healthy-plant-based-diet.jpg?s=2048x2048&w=is&k=20&c=m83OygDv_Fm9gjQvxsnEaPRd4_WC3q6vcpMBtSkauXM=" alt="" /> 
                     <p>Balanced</p>
                 </div>
          
  
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("diet=high-protein")); navigate('/home/recipes')}}>
                <img src="https://media.istockphoto.com/id/922539468/photo/selection-of-vegetarian-protein-sources-healthy-diet-concent.jpg?s=2048x2048&w=is&k=20&c=jmWY-kduiQI7H08rb9unP4Ge_krYQKT0hmWr0-7za10=" alt="" /> 
                <p>High Protein</p>
            </div>

            
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("diet=low-fat")); navigate('/home/recipes')}}>
                <img src="https://media.istockphoto.com/id/1409236261/photo/healthy-food-healthy-eating-background-fruit-vegetable-berry-vegetarian-eating-superfood.jpg?s=2048x2048&w=is&k=20&c=AOJUGUDXqr7aYJhvW4-6sf1vzaUmBO1q3bRE5HBcEVs=" alt="" /> 
                <p>Low Fat</p>
            </div>


            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("diet=low-carb")); navigate('/home/recipes')}}>
                <img src="https://cdn.pixabay.com/photo/2017/07/27/17/30/tray-2546077_640.jpg" alt="" /> 
                <p>Low Carb</p>
            </div>
         
        </div>
      </div>

      {/* meal type */}

      <div className={styles.recipesVarieties}>
            <div className={styles.header}>
                Meal Type
            </div>

            <div className={styles.cardsContainer}>
                 <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("mealType=Breakfast")); navigate('/home/recipes')}}>
                     <img src="https://cdn.pixabay.com/photo/2016/03/27/20/00/coffee-1284041_1280.jpg" alt="" /> 
                     <p>Breakfast</p>
                 </div>
          
  
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("mealType=Dinner")); navigate('/home/recipes')}}>
                <img src="https://media.istockphoto.com/id/1468466970/photo/three-generation-asian-family-toasting-while-having-dinner-together.jpg?s=2048x2048&w=is&k=20&c=mY2YW7EqzsBaK0dbyLJbrKd5Ddlf1PXrmgGjmcrIqLg=" alt="" /> 
                <p>Dinner</p>
            </div>

            
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("mealType=Lunch")); navigate('/home/recipes')}}>
                <img src="https://media.istockphoto.com/id/1146671966/photo/four-young-female-friends-meeting-for-drinks-and-food-making-a-toast-in-restaurant.jpg?s=2048x2048&w=is&k=20&c=OG9NbhdIse2BVHsCgo7QYlcDqb0PkFVSP8TJySDPHlQ=" alt="" /> 
                <p>Lunch</p>
            </div>


            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("mealType=Snacks")); navigate('/home/recipes')}}>
                <img src="https://media.istockphoto.com/id/478815753/photo/salty-snacks.jpg?s=2048x2048&w=is&k=20&c=9ZCgeiDUeUsKhig51P3iadqn2I_iQd93Pl7AFHOaOgo=" alt="" /> 
                <p>Snacks</p>
            </div>
         
        </div>
      </div>

      {/* health */}

      <div className={styles.recipesVarieties}>
            <div className={styles.header}>
                Health
            </div>

            <div className={styles.cardsContainer}>
                 <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("health=vegetarian")); navigate('/home/recipes')}}>
                     <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhcmlhbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
                     <p>vegetarian</p>
                 </div>
          
  
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("health=vegan")); navigate('/home/recipes')}}>
                <img src="https://images.unsplash.com/photo-1583495838052-7da01ba1b9ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZlZ2FufGVufDB8fDB8fHww" alt="" /> 
                <p>vegan</p>
            </div>

            
            <div className={styles.card} onClick={()=>{dispatch(fetchRecipes("health=wheat-free")); navigate('/home/recipes')}}>
                <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2x1dGVuJTIwZnJlZXxlbnwwfHwwfHx8MA%3D%3D" alt="" /> 
                <p>Gluten Free</p>
            </div>
         
        </div>
      </div>

        
      </section>
    </div>
  )
}

export default Home;
