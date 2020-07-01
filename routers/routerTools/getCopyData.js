const {COPY_URL} = require('../../config');

function getCopyData(){
    const options = {

    };

    let promise = new Promise((resolve,reject) =>{
        request(options,function(error,response,body){
            console.log('req err: ',error);
            const parsedBody = JSON.parse(body);
            console.log('req body:',parsedBody);
            resolve(tokenData);
        });
    });
}

module.exports = {getCopyData};