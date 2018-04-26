// npm install solr-node --save
// https://www.npmjs.com/package/solr-node
console.log("Executing file:", __filename);
//=============================================================================
// Require module 
var SolrNode = require('solr-node');
var request = require('request');

class GggSolrNode {
    constructor(client) {
        this.client = client;
    }
    log(title, text) {
        var maxLength = 100;
        if (text) {
            text = JSON.stringify(text);
            text = text.toString().replace(/\r?\n|\r/g, " ");
            if (text.length > maxLength) {
                text = text.substring(0, maxLength - 3) + "...";
            }
            console.log(title, text);
        }
        else {
            console.log(title); 
        }

    }
    pingServer() {
        let self = this;
        console.log("pingServer:");
        const url = "http://localhost:8983/solr/gettingstarted/admin/ping?wt=json&indent=on";
        request(url, function (error, response, body) {
            if (error) {
                self.log('error:', error);
            }
            self.log('statusCode:', response && response.statusCode);
            self.log('pingServer body:', body);
        });
    }
    strQuerySample() {
        let self = this;
        self.log("strQuerySample:");
        // Complex and chained:    
        var strQuery = this.client.query().q('name:Test with some GB18030 encoded characters');
        // Search documents using strQuery 
        this.client.search(strQuery, function (err, result) {
            if (err) {
                self.log("strQuerySample Error:", err);
                return;
            }
            self.log('strQuerySample Response:', result);
            self.log("\n");
        });
    }
    objQuerySample() {
        console.log("objQuerySample:");
        var objQuery = this.client.query().q({ cat: 'electronics', name: 'Samsung' });
        this.client.search(objQuery, function (err, result) {
            if (err) {
                console.log("objQuerySample Error:", err);
                return;
            }
            console.log('objQuerySample Response:', result);
            console.log("\n");
        });
    }
    complexQuerySample() {
        console.log("complexQuerySample:");
        // Complex and chained:
        var complexQuery = this.client.query()
            .q({ cat: 'electronics', name: 'Samsung' })
            .addParams({
                wt: 'json',
                indent: true
            })
            .start(1)
            .rows(1);
        this.client.search(complexQuery, function (err, result) {
            if (err) {
                console.log("complexQuerySample Error:", err);
                return;
            }
            console.log('complexQuerySample Response:', result.response);
            console.log("\n");
        });
    }
    myStrQuerySample() {
        console.log("myStrQuerySample:");
        var myStrQuery = 'q=cat:music&wt=json';
        this.client.search(myStrQuery, function (err, result) {
            if (err) {
                console.log("myStrQuerySample Error:", err);
                return;
            }
            console.log('myStrQuerySample Response:', result);
            console.log("\n");
        });
    }
    deleteSample() {
        console.log("deleteSample:");
        // var strQuery = 'id:17674f89-8649-43e4-8441-ce76bc17ae0f'
        var objQuery = { id: '17674f89-8649-43e4-8441-ce76bc17ae0f' }
        // Update document to Solr server 
        this.client.update(objQuery, function (err, result) {
            if (err) {
                console.log("deleteSample Error:", err);
                return;
            }
            console.log('deleteSample Response:', result.responseHeader);
        });
    }
    updateSample() {
        console.log("updateSample:");
        // JSON Data 
        var data = {
            id: '950531a2-82f0-49b4-acb2-6e43dd77d43b',
            text: 'test',
            title: 'test'
        };
        // Update document to Solr server 
        this.client.update(data, function (err, result) {
            if (err) {
                console.log("updateSample Error:", err);
                return;
            }
            console.log('updateSample Response:', result.responseHeader);
        });
    }
    runAllTests() {
        this.pingServer();
        this.updateSample();
        this.deleteSample();
        this.myStrQuerySample();
        this.strQuerySample();
        this.objQuerySample();
        this.complexQuerySample();
    }

}
//=============================================================================
// Create client 
var solrClient = new SolrNode({
    host: 'localhost',
    port: '8983',
    core: 'gettingstarted',
    protocol: 'http',
    debugLevel: 'ERROR' // log4js debug level parameter 
});
var gggSolrNode = new GggSolrNode(solrClient);
gggSolrNode.runAllTests();
//=============================================================================