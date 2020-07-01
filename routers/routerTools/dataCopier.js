const { rejects } = require("assert");

class DataCopier{
    recipeModel;
    recipes;

    constructor(model,recipes){
        this.recipeModel = model;
        this.recipes = recipes;
    }

    checkRecipes = (recipes, index, results) => {
        if(!index){
            index = 0;
        }

        if(!results){
            results = [];
        }

        let currentRecipe = recipes[index];

        let promise = new Promise((resolve,reject) => {
            let handle = currentRecipe.handle;
            if(index === results.length - 1){
                resolve(results);
            }
            return recipes.find({handle:handle})

            .then(recipe => {
                if(recipe.length === 0){
                    results.push(currentRecipe);
                    resolve(this.checkRecipes(recipes, index + 1, results));
                }
                else{
                    resolve(this.checkRecipes(recipes, index + 1, results)); 
                }
            })

            .catch(err => {
                reject(err);
            });
        });

        return promise;
    }

    copyData = () =>{
        let promise = new Promise((resolve,reject) => {
            return this.checkRecipes(this.recipes)

            .then(filteredRecipes => {
                resolve(filteredRecipes);
            })

            .catch(err => {
                reject(err);
            });
        });

        return promise;
        
    }
}

module.exports = {DataCopier};