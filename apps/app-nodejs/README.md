java -version
javac -version

Start the Server
http://localhost:8983/solr/#/

cd C:\Programs2\solr-7.3.0\bin
cd D:\Programs2\solr-7.3.0\bin

Start Solr
.\solr.cmd start

Start Solr with a Different Port
.\solr.cmd start -p 8984

Start Solr in SolrCloud mode, which will also launch the embedded ZooKeeper instance included with Solr.
.\solr.cmd start -c

Start Solr with verbose messages from the start script
.\solr.cmd start -V

Start Solr in the Foreground
.\solr.cmd start -f

Stop Solr
.\solr.cmd stop -p 8983

Stop All Solr
.\solr.cmd stop -all

launch the "techproducts" example
.\solr.cmd -e techproducts

Check if Solr is Running
.\solr.cmd status

Create a Core
.\solr.cmd create -c GggCore

To see all available options for creating a new core
.\solr.cmd create -help

restart
.\solr.cmd restart -p 8983

version
.\solr.cmd version

healthcheck
.\solr.cmd healthcheck -c gettingstarted

delete core
.\solr.cmd delete -c coreNameWillBeHere

Commands
http://localhost:8983/solr/admin/cores?action=CREATE&name=GggCore&instanceDir=GggCore

Queries

every document whose price is between $0 and $400
http://localhost:8983/solr/gettingstarted/select?q=price:[0%20TO%20400]&fl=id,name,price

Faceting information is returned as a third part of Solr's query response - json
http://localhost:8983/solr/gettingstarted/select?q=price:[0%20TO%20400]&fl=id,name,price,cat&facet=true&facet.field=cat&wt=json&indent=on

Faceting information is returned as a third part of Solr's query response
http://localhost:8983/solr/gettingstarted/select?q=price:[0%20TO%20400]&fl=id,name,price&facet=true&facet.field=cat

json formatted response
http://localhost:8983/solr/gettingstarted/select?q=price:0%20TO%20400&fl=id,name,price&facet=true&facet.field=cat&fq=cat:software&wt=json&indent=on

request further constraining the request to documents with a category of software
http://localhost:8983/solr/gettingstarted/select?q=price:0%20TO%20400&fl=id,name,price&facet=true&facet.field=cat&fq=cat:software

results only contain the ID, name, and price for each returned document
http://localhost:8983/solr/gettingstarted/select?q=video&fl=id,name,price

searches all document fields for video
http://localhost:8983/solr/gettingstarted/select?q=video

searches for ASUS Extreme N7800GTX-2DHTV (256 MB) in name field
http://localhost:8983/solr/gettingstarted/select?q=name:ASUS%20Extreme%20N7800GTX/2DHTV%20(256%20MB)&fl=name

searches for black in the name field only
http://localhost:8983/solr/gettingstarted/select?q=name:black
