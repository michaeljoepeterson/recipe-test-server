const { getCopyData } = require("../routerTools/getCopyData");

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
        console.log('status==============');
        console.log(index, results.length);
        let promise = new Promise((resolve,reject) => {
            let currentRecipe = recipes[index];
            console.log(currentRecipe);
            //if no recipes retrun empty results
            if(!currentRecipe){
                resolve(results);
            }
            let handle = currentRecipe.handle;
            //if end return results
            if(index === results.length - 1){
                resolve(results);
            }
            return this.recipeModel.find({handle:handle})

            .then(recipe => {
                console.log('found recipe================');
                console.log(recipe);
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

            return getCopyData()

            .then(response => {
                console.log('==================after request');
                console.log(response.recipes);
                return this.checkRecipes(response.recipes)
            })

            .then(filteredRecipes => {
                console.log('filtered recipes: ',filteredRecipes);
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