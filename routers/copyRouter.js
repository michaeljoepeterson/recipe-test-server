const express = require('express');
const router = express.Router();
const {checkCopy} = require('../tools/toolExports');

router.post('/',checkCopy,(req,res) => {
    const {copy} = req.body;
    if(copy){
        return res.json({
            code:200,
            message:'Copied'
        });
    }
    else{
        return res.json({
            code:200,
            message:'Not Copied'
        });
    }
    
});

module.exports = {router}