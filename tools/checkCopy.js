const {CK} = require('../config');

function checkCopy(req,res,next) {
    let {key} = req.query;

    if(key === CK){
        next();
    }
    else{
        return res.status(422).json({
			code:422,
			message:"Unathorized"
		});
    }
}

module.exports = {checkCopy};