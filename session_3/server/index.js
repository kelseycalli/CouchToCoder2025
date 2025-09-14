const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const path = require("path");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const recipesFilePath = path.join(__dirname, "recipes.json");

app.get("/", (req, res) => {
    res.send("Hello world, home page here!")
});

app.get("/recipes", (req, res) => {
    // read the json file to get the recipes
    fs.readFile(recipesFilePath, "utf-8", (err, data) => {
        // we read in the file through the filepath (encoding is just added to make sure it is correct)
        // the err variable holds any errors (if there are any)
        // the data variable holds the data read in from the file
        // we need to parse the JSON data to be turned into plain JS
        const recipes = JSON.parse(data);
        // we send the recipes like before
        res.json(recipes)
    })
});

app.post("/recipes", (req, res) => {
    // Grab recipe
    const newRecipe = req.body;
    // First read file, parse into JSON file
    fs.readFile(recipesFilePath, "utf-8", (err, data) => {
        const recipes = JSON.parse(data);
        recipes.push(newRecipe)

        fs.writeFile(recipesFilePath, JSON.stringify(recipes), () => { });
    })

    res.send("Recipe accepted, we are storing your favourite dishes")
});

app.listen(port, () => {
    console.log("Server is running on http://localhost:", port)
});
