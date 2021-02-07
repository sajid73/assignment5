function searchingItem(params) {
    const inputValue = document.getElementById('item-searched').value;
    const inputLength = inputValue.length;
    if (inputLength == 1) {
        firstLetter(inputValue);
    } else {
        foodName(inputValue)
    }
}

function firstLetter(letter) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => res.json())
        .then(data => displayFoodItem(data))
}
function foodName(mealName) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => displayFoodItem(data))
}

const displayFoodItem = mealItem => {
    console.log(mealItem);
    const mealDiv = document.getElementById('food-container');
    const arrayItem = mealItem.meals
    arrayItem.forEach(meal => {
        const mealContainer = document.getElementById('food-items');
        const mealName = meal.strMeal
        const mealId = meal.idMeal
        const mealThumb = meal.strMealThumb
        const mealDetails = `
    <div class="col">
                <div class="card">
                    <img src="${mealThumb}" class="card-img-top " alt="${mealId}">
                    <div class="card-body">
                        <h5 class="card-title">${mealName}</h5>
                    </div>
                </div>
            </div>
    `
        mealDiv.innerHTML = mealDetails
        mealContainer.appendChild(mealDiv)
    })
}