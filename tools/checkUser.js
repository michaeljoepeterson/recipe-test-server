function checkUser(req,res,next){
    const required = {
        email:'email',
        password:'password'
    };
    const numRequired = Object.keys(required).length;
    const reqFields = Object.keys(req.body);
    console.log(req.body);
    let notString = false;
    let fieldsfound = 0;
    for (let i = 0; i < reqFields.length; i++) {
        const field = reqFields[i];
        if(required[field]){
            fieldsfound++;
        }
        if(typeof req.body[field] !== 'string'){
            notString = true;
        }
    }

    if(fieldsfound !== numRequired){
        return res.json({
            code:400,
            message:'Bad Request'
        });
    }
    else if(notString){
        return res.json({
            code:400,
            message:'Bad Request'
        });
    }
    else{
        next();
    }
}

module.exports = {checkUser};