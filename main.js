const getFoodMenu = (key, value) => {

    const api = `https://www.themealdb.com/api/json/v1/1/search.php?${key}=${value}`;
    fetch(api)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            try {
                getData(data, value);
            } catch (err) {
                alert('Search result not found');

            }

        });
}

const search_btn = document.getElementById("searchBtn");
search_btn.addEventListener('click', () => {
    const food = document.getElementById("food").value;
    const len = food.length;
    // console.log(len);
    if (len == 1) getFoodMenu('f', food[0]);
    else if (len > 1) getFoodMenu('s', food);
    document.getElementById('food').value = '';
});


function getData(data, value) {
    const arr = data.meals;
    const names = [];
    // arr.forEach(element => {
    //     names.push(element.strMeal);
    // });
    // console.log(names);

    displayItems(data.meals);

    names.filter(names => name === value);
    console.log(value);
}

const displayItems = data => {
    const foodsDiv = document.getElementById('display-data');

    data.forEach(element => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'food';
        // foodItemDiv.addEventListener('click', function() {
        //     
        // })
        getFoodIngredient(foodItemDiv, element);

        const foodInfo = `
            <img src="${element.strMealThumb}">
            <h3>${element.strMeal}</h3>
        `;
        foodItemDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodItemDiv);
    });
}

// function showFoodData(data, element) {
//     data.addEventListener('click', () => {
//         // console.log('clicked');
//         // console.log(data);
//         document.getElementById('ingredient').appendChild(data);
//         const li = document.createElement('li');
//         li.innerText = 'mine';
//         document.getElementById('ul').appendChild(li);

//     })
// }

function setIngredient(element, ingredients) {
    ingredients.push(element.strIngredient1);
    ingredients.push(element.strIngredient2);
    ingredients.push(element.strIngredient3);
    ingredients.push(element.strIngredient4);
    ingredients.push(element.strIngredient5);
    ingredients.push(element.strIngredient6);
    ingredients.push(element.strIngredient7);
    ingredients.push(element.strIngredient8);
    ingredients.push(element.strIngredient9);
    ingredients.push(element.strIngredient10);
    ingredients.push(element.strIngredient11);
    ingredients.push(element.strIngredient12);
    ingredients.push(element.strIngredient13);
    ingredients.push(element.strIngredient14);
    ingredients.push(element.strIngredient15);
    ingredients.push(element.strIngredient16);
    ingredients.push(element.strIngredient17);
    ingredients.push(element.strIngredient18);
    ingredients.push(element.strIngredient19);
    ingredients.push(element.strIngredient20);
}

function getFoodIngredient(foodMenuDiv, element) {

    foodMenuDiv.addEventListener('click', () => {
        document.getElementById('parentDiv').style.display = "none";

        document.getElementById("ingredient").appendChild(foodMenuDiv);
        // document.getElementById('ingredient').style.display = "block";


        const ingredients = [];

        setIngredient(element, ingredients);
        const ul = document.getElementById('ul');
        let index = 0;
        while (ingredients[index] != "") {
            const li = document.createElement('li');
            li.innerText = ingredients[index];
            console.log(li);
            ul.appendChild(li);
            index++;
        }

    });
}

// const ingrediantArray = [20];

// function getFoodIngredient(foodMenuDiv,element){


//     foodMenuDiv.addEventListener('click',()=>{
//          const foodItem = document.getElementById("food-item").appendChild(foodMenuDiv);


//             console.log(element.strIngredient1);

//             const li = document.createElement('li');

//         const ingredient = <li>${element.strIngredient1}</li>;
//          li.innerText = ingredient;

//          document.getElementById('ul').appendChild(ingredient); 
//          count++;




//     });
// }




// function getName(data) {
//     // console.log(data.strMeal[0]);
//     const array = [data];
//     // console.log(array);
//     array.map(function(data) {
//         // console.log(data.meals);
//         const array = data.meals;
//         const names = array.strMeal;
//         console.log(names);
//     })
// }