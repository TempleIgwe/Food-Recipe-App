const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector(".meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

searchBtn.addEventListener("click", getMealList);

function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch("www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
