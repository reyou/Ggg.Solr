// https://www.npmjs.com/package/solr-node
// http://godong9.github.io/solr-node/docs/Client.html
// http://godong9.github.io/solr-node/docs/Query.html
var SolrNode = require("solr-node");
var request = require("request");
var SolrConfig = require("../SolrConfig.json");
function pingServer(host, core) {
  const url = host + "/solr/" + core + "/admin/ping?wt=json&indent=on";
  request(url, function(error, response, body) {
    if (error) {
      console.log("error:", error, url);
    }
    console.log("statusCode:", response && response.statusCode);
    console.log("pingServer body:", body);
  });
}

pingServer(SolrConfig.host, SolrConfig.core);
