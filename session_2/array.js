// index / indices          0         1         2        3
const ingredients = ["chicken", "butter", "salt", "pepper"];
const steps = [];
ingredients[0] = "tofu";
ingredients.push("oregano");
ingredients.push("mozzarella");
const lastIngredient = ingredients.pop();

console.log(ingredients);
console.log(lastIngredient);



// push : adds item to array at end
// pop : removes last item from array