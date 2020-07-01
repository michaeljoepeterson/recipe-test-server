const {ADMIN_EMAILS} = require('../config');

function checkAdminEmails(req,res,next){
    let adminEmails = ADMIN_EMAILS.split(',');
    let {email} = req.body;
    let foundEmail = false;
    for(let i = 0;i < adminEmails.length;i++){
        if(adminEmails[i].trim() === email){
            foundEmail = true;
            break;
        }
    }
    if(foundEmail){
        next();
    }
    else{
        return res.json({
            code:400,
            message:'Unathorized'
        });
    }
    
}

module.exports = {checkAdminEmails};