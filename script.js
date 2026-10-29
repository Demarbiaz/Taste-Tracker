console.log("Hello World!");

 // 1. Create an array of favorite foods
let favoriteFoods = ["Ramen", "Sushi", "Pizza", "Tacos", "Pasta", "Burgers"];

// 2. Print each favorite food
for (let food of favoriteFoods) {
    console.log("One of my favorite foods is " + food + ".");
}

// 3. Print the ranking of each favorite food
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a food recommendation function
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function three times
printFoodRecommendation("Ramen");
printFoodRecommendation("Sushi");
printFoodRecommendation("Tacos");

// List of 50 friends' favorite foods
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen",
    "Pad Thai", "Curry", "Pho", "Nachos", "Gnocchi", "Donuts",
    "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros",
    "Fried Rice", "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot",
    "Enchiladas", "Baklava", "Gyros", "Hummus", "Empanadas",
    "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche",
    "Pierogi", "Arepas", "Okonomiyaki", "Ceviche", "Brisket",
    "Bao Buns", "Poutine", "Clam Chowder", "Fajitas", "Canelé",
    "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura",
    "Spring Rolls", "Crepes"
];

// 5 and 6. Find and print foods with the letter "a"
let foodsWithA = friendFavorites.filter(food =>
    food.toLowerCase().includes("a")
);

console.log("Foods with the letter a:", foodsWithA);

// 7. Find food names longer than 6 characters
let longFoodNames = friendFavorites.filter(food => food.length > 6);

// 8. Find food names 6 characters or shorter
let shortFoodNames = friendFavorites.filter(food => food.length <= 6);

// 9. Print both arrays and compare their lengths
console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are the same number of long and short-named foods.");
}

// 10. Find and print the longest food name
let longestFoodName = friendFavorites[0];

for (let food of friendFavorites) {
    if (food.length > longestFoodName.length) {
        longestFoodName = food;
    }
}

console.log(
    "The longest food name in the list is " +
    longestFoodName +
    " with " +
    longestFoodName.length +
    " characters."
);
