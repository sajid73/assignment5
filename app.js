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
const foodName= (mealName) => {
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
        const insertedItem =`
        <img src="${items.strMealThumb}" width="500px" alt="">
        <h2>${items.strMeal}</h2>
        <h4>Ingredients</h4>
        <ul id="ingredient-list">
            
        </ul>
        `
        detailscontainer.innerHTML = insertedItem
        const ingredientList = document.getElementById('ingredient-list')
        const gradients = `
            <li>${items.strIngredient1}</li>
            <li>${items.strIngredient2}</li>
            <li>${items.strIngredient3}</li>
            <li>${items.strIngredient4}</li>
            <li>${items.strIngredient5}</li>
            <li>${items.strIngredient6}</li>
        `
        ingredientList.innerHTML = gradients
    })
}