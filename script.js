// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.category-btn');
//     const foodCardsContainer = document.querySelector('.food-cards');

//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             // Remove active class from all buttons
//             buttons.forEach(btn => btn.classList.remove('active'));

//             // Add active class to the clicked button
//             this.classList.add('active');

//             // Update food cards based on the selected category
//             const category = this.getAttribute('data-category');
//             updateFoodCards(category);
//         });
//     });

//     function updateFoodCards(category) {
//         // Clear existing food cards
//         foodCardsContainer.innerHTML = '';

//         // Generate new food cards based on the selected category
//         const foodItems = getFoodItemsByCategory(category);
//         foodItems.forEach(item => {
//             const card = document.createElement('div');
//             card.className = 'food-card';
//             card.textContent = item;
//             foodCardsContainer.appendChild(card);
//         });
//     }

//     function getFoodItemsByCategory(category) {
//         const foodData = {
//             fruits: ['Apple', 'Banana', 'Orange'],
//             vegetables: ['Carrot', 'Broccoli', 'Spinach'],
//             meat: ['Chicken', 'Beef', 'Pork'],
//             seafood: ['Salmon', 'Shrimp', 'Crab'],
//             dairy: ['Milk', 'Cheese', 'Yogurt'],
//             grains: ['Rice', 'Wheat', 'Oats'],
//             sweets: ['Chocolate', 'Candy', 'Cake']
//         };
//         return foodData[category] || [];
//     }
// });