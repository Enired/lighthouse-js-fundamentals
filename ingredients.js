const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let whileCounter = 0;
while(whileCounter < ingredients.length){
  console.log(ingredients[whileCounter]);
  whileCounter++;
}
console.log('\n'); //To break up loop outputs

// Write a for loop that prints out the contents of ingredients:
for(let forCounter = 0; forCounter < ingredients.length; forCounter++){
  console.log(ingredients[forCounter]);
}
console.log('\n'); //To break up loop outputs

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let backCounter = ingredients.length-1; backCounter >=0; backCounter--){
  console.log(ingredients[backCounter]);
}
