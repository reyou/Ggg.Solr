let readRandomUsers = require("./read-random-users");

function importRandomUsers(users) {
  users.forEach((element, index) => {
    console.log(index, element);
  });
}

if (require.main === module) {
  let users = readRandomUsers();
  importRandomUsers(users);
}
