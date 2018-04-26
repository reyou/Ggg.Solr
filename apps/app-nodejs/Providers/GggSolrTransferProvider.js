console.log("Executing file:", __filename);
//=============================================================================
// https://www.npmjs.com/package/request
// npm install request --save
var request = require('request');
// process.env.HTTP_PROXY = "http://127.0.0.1:8888";
const getRandomUser = function (callback) {
    request('https://api.randomuser.me/', function (error, response, body) {
        //console.log('error:', error);
        //console.log('statusCode:', response && response.statusCode);
        //console.log('body:', body);
        callback(error, body);
    });
}
var createUser = function (user, callback) {
    callback(null, "user created");
}
var onCreateUserCompleted = function (err, result) {
    console.log("onCreateUserCompleted:", result);
}
var onGetRandomUserCompleted = function (err, body) {
    if (err) {
        throw err;
    }
    // console.log("onGetRandomUserCompleted:", body);
    let userResult = JSON.parse(body);
    let user = userResult.results[0];
    console.log("onGetRandomUserCompleted: ",user.name.first, user.name.last, user.email);
   
    createUser(user, onCreateUserCompleted);
}

// all requests 
getRandomUser(onGetRandomUserCompleted);