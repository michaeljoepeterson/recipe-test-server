const express = require('express');
const {Recipe} = require('../models/recipes');
const {checkKey} = require('../tools/checkKey');
const router = express.Router();
//bulk get recipes
router.get('/',(req,res) =>{
    let {skip,limit} = req.query;
    limit = limit ? parseInt(limit) : 20;
    skip = skip ? parseInt(skip) : 0;
    return Recipe.find({active:true}).limit(limit).skip(skip)

    .then(recipes => {
        return res.json({
            code:200,
            recipes
        });
    })

    .catch(err => {
        console.log('error ',err);

        return res.json({
            code:500,
            message:'an error occured'
        });
    });
});
router.get('/copy',checkKey,(req,res) =>{

    return Recipe.find({})

    .then(recipeResults => {
        return res.json({
            code:200,
            recipes:recipeResults.map(recipe => recipe.serialize())
        });
    })

    .catch(err => {
        console.log('error ',err);

        return res.json({
            code:500,
            message:'an error occured'
        });
    });
});
//get single recipe
router.get('/:recipeHandle',(req,res) =>{
    let {recipeHandle} = req.params;

    return Recipe.find({handle:recipeHandle})

    .then(recipe => {
        return res.json({
            code:200,
            recipe
        });
    })

    .catch(err => {
        console.log('error ',err);

        return res.json({
            code:500,
            message:'an error occured'
        });
    });
});



module.exports = {router};