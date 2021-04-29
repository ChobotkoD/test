import React, { useEffect, useState } from "react";
import { MainWrapper, MainContainer, MainButtons } from "./MainPageElements";
import thumbnotfound from "../../images/no-image.svg";

const MainPage = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  //fetch random recipe from API by click
  const fetchRandomRecipe = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const randomRecipe = await response.json();
    setRecipe(randomRecipe.meals[0]);
  };

  //save recipe to localstore and display on favourite page
  const saveToLocalStorage = () => {
    let itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [];
    localStorage.setItem("items", JSON.stringify(itemsArray));
    itemsArray.push(recipe);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  };

  return (
    <MainWrapper>
      <MainContainer>
        {recipe.strMealThumb ? (
          <img src={recipe.strMealThumb} alt="mealImage" />
        ) : (
          <img src={thumbnotfound} alt="recipe-thumb" />
        )}
        {recipe.strMeal}
        <p>{recipe.strInstructions}</p>
        <MainButtons>
          <div id="next-button" className="btnMain" onClick={fetchRandomRecipe}>
            <p>NEXT RECIPE</p>
          </div>
          <div
            id="save-button"
            className="btnMain"
            onClick={saveToLocalStorage}
          >
            <p>SAVE</p>
          </div>
        </MainButtons>
      </MainContainer>
    </MainWrapper>
  );
};

export default MainPage;
