document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const logo = document.getElementById('logo');
    const foodDetails = document.getElementById('foodDetails');
  
    // Populate menu dynamically
    const menuItems = [
      {
          name: "Burger",
          info: "Burger<br>Ingredients: Beef patty, lettuce, tomato, cheese<br>Price: $10<br>Nutrition: 500 calories"
      },
      {
          name: "Pizza",
          info: "Pizza<br>Ingredients: Dough, tomato sauce, cheese, pepperoni<br>Price: $12<br>Nutrition: 700 calories"
      },
      {
          name: "Salad",
          info: "Salad<br>Ingredients: Lettuce, tomato, cucumber, dressing<br>Price: $8<br>Nutrition: 300 calories"
      },
      {
          name: "Pasta Carbonara",
          info: "Pasta Carbonara<br>Ingredients: Spaghetti, eggs, bacon, Parmesan cheese<br>Price: $14<br>Nutrition: 600 calories"
      },
      {
          name: "Grilled Salmon",
          info: "Grilled Salmon<br>Ingredients: Salmon fillet, lemon, olive oil, herbs<br>Price: $18<br>Nutrition: 450 calories"
      },
      {
          name: "Vegetarian Wrap",
          info: "Vegetarian Wrap<br>Ingredients: Tortilla, hummus, mixed vegetables, feta cheese<br>Price: $10<br>Nutrition: 350 calories"
      },
      {
          name: "Chicken Caesar Salad",
          info: "Chicken Caesar Salad<br>Ingredients: Grilled chicken, romaine lettuce, croutons, Caesar dressing<br>Price: $12<br>Nutrition: 400 calories"
      },
      {
          name: "Shrimp Scampi",
          info: "Shrimp Scampi<br>Ingredients: Shrimp, garlic, butter, white wine, parsley<br>Price: $16<br>Nutrition: 550 calories"
      }
  ];
  
    menu.innerHTML = '<ul>' +
      menuItems.map(item => `<li onmouseover="displayFoodDetails(this)" data-info="${item.info}"><b>${item.name}</b></li>`).join('') +
      '</ul>';
  
    // Load logo dynamically
    logo.innerHTML = '<img src="restaurantlogoEdit.png" alt="Restaurant Logo">';
  });
  
  function displayFoodDetails(item) {
    const details = document.getElementById('foodDetails');
    details.innerHTML = item.dataset.info;
  }
  