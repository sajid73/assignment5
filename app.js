// sending search value to get data
const searchingItem = () => {
    document.getElementById('meal-details').style.display = "none"
    document.getElementById('error-handle').style.display = "none"
    document.getElementById('food-container').innerHTML = ``
    const inputValue = document.getElementById('item-searched').value
    const inputLength = inputValue.length
    if (inputLength == 1) {
        firstLetter(inputValue)
    } else {
        foodName(inputValue)
    }
}

// for searching meal by only first letter
const firstLetter = (letter) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
        .then(res => res.json())
        .then(data => displayFoodItem(data))
        .catch((error) => {
            document.getElementById('error-handle').style.display = "block"
        })
}

// for searching meal by meal name
const foodName = (mealName) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data => displayFoodItem(data))
        .catch((error) => {
            document.getElementById('error-handle').style.display = "block"
        })
}

// showing result data
const displayFoodItem = mealItem => {
    const items = mealItem.meals
    items.forEach(meal => {
        //previous cod
        const mealDiv = document.getElementById('food-container')
        const mealContainer = document.getElementById('food-items')
        const mealName = meal.strMeal
        const mealId = meal.idMeal
        const mealThumb = meal.strMealThumb
        const mealDetails = `
        <div class="col">
        <div class="card card-style">
            <div onclick="displayDetails(${mealId})">
                <img src="${mealThumb}" class="card-img-top " alt="${mealId}">
                <div class="card-body">
                    <h5 class="card-title">${mealName}</h5>
                </div>

            </div>
            </div>
        </div>
        `
        mealDiv.innerHTML += mealDetails
        mealContainer.appendChild(mealDiv)
        //previous cod
    });
}

// showing meal details for bonus
const displayDetails = (mealId) => {
    const detailscontainer = document.getElementById('meal-details')
    detailscontainer.style.display = "block"
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => {
            const items = data.meals[0]
            const insertedItem = `
        <img src="${items.strMealThumb}" width="500px" alt="">
        <h1>${items.strMeal}</h1>
        <h5>Ingredients</h5>
        <ul id="ingredient-list">
        
        </ul>
        `
            detailscontainer.innerHTML = insertedItem
            ingredientAdd(items.strIngredient1)
            ingredientAdd(items.strIngredient2)
            ingredientAdd(items.strIngredient3)
            ingredientAdd(items.strIngredient4)
            ingredientAdd(items.strIngredient5)
            ingredientAdd(items.strIngredient6)
            ingredientAdd(items.strIngredient7)
            ingredientAdd(items.strIngredient8)
            ingredientAdd(items.strIngredient9)
            ingredientAdd(items.strIngredient10)
            ingredientAdd(items.strIngredient11)
            ingredientAdd(items.strIngredient12)
            ingredientAdd(items.strIngredient13)
            ingredientAdd(items.strIngredient14)
            ingredientAdd(items.strIngredient15)
            ingredientAdd(items.strIngredient16)
            ingredientAdd(items.strIngredient17)
            ingredientAdd(items.strIngredient18)
            ingredientAdd(items.strIngredient19)
            ingredientAdd(items.strIngredient20)
        })
}
const ingredientAdd = (ingredientDetails) => {

    if (ingredientDetails != '' && ingredientDetails != null) {
        const gradients = `
            <li>${ingredientDetails}</li>
        `
        document.getElementById('ingredient-list').innerHTML += gradients
    }
    console.log(ingredientDetails);
}