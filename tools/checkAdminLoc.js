const {ADMIN_LOC} = require('../config');

function checkAdminLocs(req,res,next){
    const adminLocs = ADMIN_LOC.split(',');
    let loc = req.ip;
    //console.log(loc);
    let foundLoc = false;
    for(let i = 0;i < adminLocs.length;i++){
        if(adminLocs[i].trim() === loc){
            foundLoc = true;
            break;
        }
    }
    if(foundLoc){
        next();
    }
    else{
        return res.json({
            code:400,
            message:'Unathorized'
        });
    }
    
}

module.exports = {checkAdminLocs};