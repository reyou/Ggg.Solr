var request = require('request');

class RandomUserGenerator {
    constructor(core) {
        this.core = core;
    }
    createRandomUsers(count) {
        let promises = [];
        for (var i = 0; i <= count; i++) {
            let promise = new Promise(function (resolve, reject) {
                request('https://api.randomuser.me/', function (error, response, body) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(response, body)
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
let onTasksCompleted = function (completedTasks) {
    for (let i = 0; i <= completedTasks.length; i++) {
        debugger;
    }
}
let onTasksCatch = function (error) {
    console.log("onTasksCatch", error);
}
Promise.all(tasks).then(onTasksCompleted).catch(onTasksCatch);