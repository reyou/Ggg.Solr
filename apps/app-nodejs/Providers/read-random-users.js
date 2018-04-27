// https://stackoverflow.com/questions/4981891/node-js-equivalent-of-pythons-if-name-main
// https://nodejs.org/api/modules.html#modules_accessing_the_main_module
var fs = require("fs");
var path = require("path");

function readRandomUsers() {
  let folder = path.join(__dirname, "../db-json/users/");
  let contents = [];
  // https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
  fs.readdirSync(folder).forEach(file => {
    let filePath = path.join(folder, file);
    let content = fs.readFileSync(filePath, "utf-8");
    let user = JSON.parse(content);
    contents.push(user);
  });
  return contents;
}
if (require.main === module) {
  let contents = readRandomUsers();
  console.log(contents.length);
}

module.exports = readRandomUsers;
