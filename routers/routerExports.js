const {router:userRouter} = require('./userRouter');
const {router:recipeRouter} = require('./recipeRouter');
const {router:recipeRouterpublic} = require('./publicRecipeRouter');

module.exports = {userRouter,recipeRouter,recipeRouterpublic};