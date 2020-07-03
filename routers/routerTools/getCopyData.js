const {COPY_URL,AK} = require('../../config');
const request = require('request');

function getCopyData(){
    let url = `${COPY_URL}recipes-get/copy?key=${AK}`;

    const options = {
        url
    };

    let promise = new Promise((resolve,reject) =>{
        request(options,function(error,response,body){
            console.log('req err: ',error);
            const parsedBody = JSON.parse(body);
            console.log('req body:',parsedBody);
            resolve(parsedBody);
        });
    });

    return promise;
}

module.exports = {getCopyData};