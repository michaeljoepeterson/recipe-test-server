const {checkEmail} = require('./checkEmail');
const {checkAdminEmails} = require('./checkAdminEmails');
const {checkUser} = require('./checkUser');
const {checkAdminLocs} = require('./checkAdminLoc');
const {checkKey} = require('./checkKey');
const {checkCopy} = require('./checkCopy');

module.exports = {checkEmail,checkAdminEmails,checkUser,checkAdminLocs,checkKey,checkCopy};