const {AK} = require('../config');

function checkKey(req,res,next) {
    let {key} = req.query;

    if(key === AK){
        next();
    }
    else{
        return res.status(422).json({
			code:422,
			message:"Unathorized"
		});
    }
}

module.exports = {checkKey};