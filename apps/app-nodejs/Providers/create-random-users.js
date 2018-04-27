var request = require("request");

class RandomUserGenerator {
  constructor(core) {
    this.core = core;
  }
  createRandomUsers(count) {
    let promises = [];
    for (var i = 0; i <= count; i++) {
      let promise = new Promise(function(resolve, reject) {
        request("https://api.randomuser.me/", function(error, response, body) {
          if (error) {
            reject(error);
          } else {
            resolve(body);
          }
        });
      });
      promises.push(promise);
    }
    return promises;
  }
}

let randomUserGenerator = new RandomUserGenerator();
let tasks = randomUserGenerator.createRandomUsers(10);
let onTasksCompleted = function(completedTasks) {
  for (let i = 0; i <= completedTasks.length; i++) {
    let completedTask = completedTasks[i];
    console.log("completedTask:", completedTask);
  }
};
let onTasksCatch = function(error) {
  console.log("onTasksCatch", error);
};
/*Creates a Promise that is resolved with an array 
of results when all of the provided Promises resolve, 
or rejected when any Promise is rejected.*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Promise.all(tasks)
  .then(onTasksCompleted)
  .catch(onTasksCatch);
