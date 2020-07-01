const {router:userRouter} = require('./userRouter');
const {router:recipeRouter} = require('./recipeRouter');
const {router:recipeRouterpublic} = require('./publicRecipeRouter');
const {router:copyRouter} = require('./copyRouter');

module.exports = {userRouter,recipeRouter,recipeRouterpublic,copyRouter};