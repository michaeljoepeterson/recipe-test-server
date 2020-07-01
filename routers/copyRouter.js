const express = require('express');
const router = express.Router();
const {checkCopy} = require('../tools/toolExports');
const {DataCopier} = require('./routerTools/dataCopier');
const {Recipe} = require('../models/recipes');

router.post('/',checkCopy,(req,res) => {
    const {copy} = req.body;
    if(copy){
        const copier = new DataCopier(Recipe,[]);

        return copier.copyData()

        .then(results => {
            return res.json({
                code:200,
                message:'Not Copied',
                results
            });
        })

        .catch(err => {
            console.log('=============error copying data')
            return res.json({
                code:500,
                message:'error copying data'
            });
        })
    }
    else{
        return res.json({
            code:200,
            message:'Not Copied'
        });
    }
    
});

module.exports = {router}