const express = require('express');
const {Recipe} = require('../models/recipes');
const passport = require('passport');
const router = express.Router();
const jwtAuth = passport.authenticate('jwt', { session: false });
const {handleize} = require('./routerTools/handleize');
router.use(jwtAuth);
//add verification middleware
router.post('/',(req,res) => {
    console.log(req.body);
    const {title,servingSize,tte,description,ingredients,steps,mainImage, extraImages,youtube,videoNotes,active,shortDescription,featured} = req.body;
    const handle = handleize(title);
    return Recipe.create({
        title,
        servingSize,
        tte,
        description,
        ingredients,
        steps,
        mainImage,
        extraImages,
        youtube,
        videoNotes,
        active,
        shortDescription,
        featured,
        handle
    })

    .then( recipe => {
        return res.json({
            code:200,
            message:'Recipe created'
        });
    })

    .catch( err => {
        console.log('error ',err);
        if(err.message.includes('E11000')){
            return res.json({
                code:401,
                message:'Recipe already exists'
            });
        }
        return res.json({
            code:500,
            message:'an error occured'
        });
    })
    
});

function createUpdateData(body){
    let data = {};
    
    for(let field in body){
        data[field] = body[field];
    }

    return data;
}

router.put('/:recipeHandle',(req,res) => {
    let {recipeHandle} = req.params;
    console.log(req.body,recipeHandle);
    const updateData = createUpdateData(req.body);
    
    return Recipe.findOneAndUpdate({'handle':recipeHandle},{
        $set:updateData
    },{
        useFindAndModify:false
    })

    .then(response => {
        return res.json({
            code:200,
            message:'Recipe Updated'
        });
    })

    .catch( err=> {
        console.log('Error updating recipe ',err);
        if(err.message.includes('E11000')){
            return res.json({
                code:401,
                message:'Recipe already exists'
            });
        }
        else{
            return res.json({
                code:500,
                message:'Error Updating Recipe',
                error:err.errmsg
            });
        }
        
    });
});



module.exports = {router};