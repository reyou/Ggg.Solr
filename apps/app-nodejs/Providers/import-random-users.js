let readRandomUsers = require("./read-random-users");
let flatten = require("./flatten-unflatten-json").flatten;
// https://www.npmjs.com/package/request
var request = require("request");
process.env.HTTP_PROXY = "http://127.0.0.1:8888";
var SolrConfig = require("../SolrConfig.json");
// POST http://localhost:8983/solr/ggg_core/update?boost=1.0&commitWithin=1000&overwrite=true&wt=json HTTP/1.1
function importRandomUsers(users) {
  users.forEach((element, index) => {
    let url = SolrConfig.host + "/solr/" + SolrConfig.core + "/update?boost=1.0&commitWithin=1000&overwrite=true&wt=json";
    let elementFlatten = flatten(element);
    let options = {
      json: [elementFlatten],
    };
    let requestCompleted = function (error, response, body) {
      if (response.statusCode >= 300) {
        console.log("Not an expected response. Status Code:", response.statusCode);
      }
      console.log(index + ":", "userid:", element.id, "statusCode:", response.statusCode + ":", body);
    }
    // https://stackoverflow.com/questions/36626804/importing-nested-documents-in-solr-using-dataimporthandler
    // https://stackoverflow.com/questions/5584857/solr-documents-with-child-elements
    request.post(url, options, requestCompleted);
  });
}

if (require.main === module) {
  let users = readRandomUsers();
  importRandomUsers(users);
}
