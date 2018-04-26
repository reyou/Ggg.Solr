java -version
javac -version

Start the Server
http://localhost:8983/solr/#/

cd C:\Programs2\solr-6.6.0\solr-6.6.0\bin

.\solr.cmd start


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
