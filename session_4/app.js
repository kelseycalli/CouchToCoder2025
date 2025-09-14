// 1. Make a request that loads in the recipes from our own backend
// 2. Capture the response value
// 3. Turn it into JavaScript
// 4. Loop through each recipe
// 5. Create the HTML components for these recipes
// 6. Populate the text part using innerText
// 7. Append each recipe to the webpage

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/recipes")
    const recipes = await response.json();
    for (recipe of recipes) {
        // Create the container that will hold the recipe
        const recipeContainer = document.createElement("div");

        // Create the rcipe name tag <h3>, add text to it, append to container
        const nameTag = document.createElement("h3");
        nameTag.innerText = recipe.name;
        recipeContainer.appendChild(nameTag);

        // Same with cuisine and time tags but with <p>
        const timeTag = document.createElement("p");
        timeTag.innerText = recipe.time;
        recipeContainer.appendChild(timeTag);

        const cuisineTag = document.createElement("p");
        cuisineTag.innerText = recipe.cuisine;
        recipeContainer.appendChild(cuisineTag);

        // Create the <ul> element for ingredients
        const ingredientsListTag = document.createElement("ul");

        // Create <li> element but append as a child of the <ul> element
        for (ingredient of recipe.ingredients) {
            const ingredientsListItemTag = document.createElement("li");
            ingredientsListItemTag.innerText = ingredient;
            ingredientsListTag.appendChild(ingredientsListItemTag);
        }

        // Append <ul> (containing child <li>) to recipeContainer
        recipeContainer.appendChild(ingredientsListTag);

        // This is just adding a break between ingredients and steps
        recipeContainer.appendChild(document.createElement("br"));

        // Create the <ol> element for steps
        const stepsListTag = document.createElement("ol");

        // Create <li> element but append as a child of the <ol> element
        for (step of recipe.steps) {
            const stepsListItemTag = document.createElement("li");
            stepsListItemTag.innerText = step;
            stepsListTag.appendChild(stepsListItemTag);
        }

        // Append <ol> (containing child <li>) to recipeContainer
        recipeContainer.appendChild(stepsListTag);

        // Create recipe list which will contain all the recipes
        const recipeList = document.querySelector("#recipe-list");

        // Append recipeContainer to recipeList
        recipeList.appendChild(recipeContainer);
    }

    // Grab add new recipe form from HTML
    const recipeForm = document.querySelector("form");
    recipeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newRecipe = {};
        // Post name, cuisine & time to backend
        newRecipe.name = event.target.name.value;
        newRecipe.cuisine = event.target.cuisine.value;
        newRecipe.time = event.target.time.value;
        // Grab ingredients text, split into array of strings using
        // the regex expression for new line
        const ingredientsText = event.target.ingredients.value;
        newRecipe.ingredients = ingredientsText.split(/\r?\n/);
        // Same again for steps
        const stepsText = event.target.steps.value;
        newRecipe.steps = stepsText.split(/\r?\n/);

        fetch("http://localhost:3000/recipes", {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify(newRecipe)
        })
    })



    // Write incoming data into JSON fileS

    // Confirm back if saving was successful

})
// test