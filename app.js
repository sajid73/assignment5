function searchingItem() {
    document.getElementById('food-container').innerHTML = ``
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
    const items = mealItem.meals;
    items.forEach(meal => {
        //previous cod
        const mealDiv = document.getElementById('food-container');
        console.log("here: ", meal);
        const mealContainer = document.getElementById('food-items');
        const mealName = meal.strMeal
        const mealId = meal.idMeal
        const mealThumb = meal.strMealThumb
        const mealDetails = `
        <div class="col">
        <div class="card card-style">
            <a href="#${mealId}">
                <img src="${mealThumb}" class="card-img-top " alt="${mealId}">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                </div>
            </a>
            </div>
        </div>
        `
        mealDiv.innerHTML += mealDetails
        mealContainer.appendChild(mealDiv)
        //previous cod
    });
}