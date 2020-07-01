const {checkEmail} = require('./checkEmail');
const {checkAdminEmails} = require('./checkAdminEmails');
const {checkUser} = require('./checkUser');
const {checkAdminLocs} = require('./checkAdminLoc');
const {checkKey} = require('./checkKey');

module.exports = {checkEmail,checkAdminEmails,checkUser,checkAdminLocs,checkKey};