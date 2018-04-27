var request = require("request");
var fs = require("fs");
var path = require("path");
// https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid/v1");

class RandomUserGenerator {
  constructor() {}
  createRandomUsers(count) {
    let promise = new Promise(function(resolve, reject) {
      request("https://randomuser.me/api/?results=" + count, function(
        error,
        response,
        body
      ) {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
    return promise;
  }
}

let randomUserGenerator = new RandomUserGenerator();
let userPromise = randomUserGenerator.createRandomUsers(100);
let onTaskCompleted = function(result) {
  let resultObj = JSON.parse(result);
  resultObj.results.forEach(element => {
    // ⇨ 'f64f2940-fae4-11e7-8c5f-ef356f279131'
    const id = uuidv1();
    let file = path.join(__dirname, "../db-json/users/", id + ".json");
    let content = JSON.stringify(element, null, 4);
    fs.writeFileSync(file, content, "utf8");
  });
};
let onTaskCatch = function(error) {
  console.log("onTasksCatch", error);
};
/*Creates a Promise that is resolved with an array 
of results when all of the provided Promises resolve, 
or rejected when any Promise is rejected.*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
userPromise.then(onTaskCompleted).catch(onTaskCatch);
