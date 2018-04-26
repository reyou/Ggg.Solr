@echo off
:into
:: https://cwiki.apache.org/confluence/display/solr/Post+Tool#PostTool-SimplePostTool
::=============================================================================
echo GggMessage: Browse into solr folder
cd C:\Programs2\solr-6.6.0\solr-6.6.0\example\exampledocs
echo.
::=============================================================================
::call java -jar post.jar -h
call java -Dc=gettingstarted -Dauto=yes -Ddata=files -Drecursive=yes -jar post.jar *.xml
::=============================================================================
echo GggMessage: Program End.
echo.
::=============================================================================
pause>nul
