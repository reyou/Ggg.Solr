@echo off
:into
::=============================================================================
echo GggMessage: Browse into solr folder
cd C:\Programs2\solr-6.6.0\solr-6.6.0\bin
echo.
::=============================================================================
:selections
echo How do you want to start the server?
echo 1- solr.cmd start
echo 1.1- solr.cmd start -c (Start Solr in SolrCloud mode, which will also launch the embedded ZooKeeper instance included with Solr.)
echo 1.2- solr.cmd start -V (Start Solr with verbose messages from the start script.)
echo 2- solr.cmd start -f (Start Solr in the Foreground)
echo 3- solr.cmd start -p 8984 (Start Solr with a Different Port)
echo 4- solr.cmd stop -p 8983 (Stop Solr)
echo 5- solr.cmd stop -all (Stop All Solr)
echo 6- solr.cmd -e techproducts (launch the "techproducts" example)
echo 7- solr.cmd status (Check if Solr is Running)
echo 8- solr create -c GggCore (Create a Core)
echo 8.1- solr create -c gettingstarted (Create a Core)
echo 9- solr create -help (To see all available options for creating a new core)
echo 10- solr.cmd restart -p 8983
echo 11- solr.cmd version 
echo 12- solr.cmd healthcheck -c gettingstarted
echo 13- solr.cmd delete -c coreNameWillBeHere
echo.
set /p selection="Type the number: "
if not defined selection (
cls
echo Please make your selection via number.
echo.
goto into
)
::=============================================================================
goto %selection%
::=============================================================================
:invalidSelection
cls
echo You made an invalid selection: %selection%
echo Please try again.
echo.
goto into
::=============================================================================
:1
echo.
call solr.cmd start
echo.
goto end
::=============================================================================
:1.1
echo.
call solr.cmd start -c
echo.
goto end
::=============================================================================
:1.2
echo.
call solr.cmd start -V
echo.
goto end
::=============================================================================
:2
echo.
call solr.cmd start -f
echo.
goto end
::=============================================================================
:3
echo.
call solr.cmd start -p 8984
echo.
goto end
::=============================================================================
:4
echo.
call solr.cmd stop -p 8983
echo.
goto end
::=============================================================================
:5
echo.
call solr.cmd stop -all
echo.
goto end
::=============================================================================
:6
echo.
call solr.cmd -e techproducts
echo.
goto end
::=============================================================================
:7
echo.
call solr.cmd status
echo.
goto end
::=============================================================================
:8
echo.
call solr.cmd create -c GggCore
echo.
goto end
::=============================================================================
:8.1
echo.
call solr.cmd create -c gettingstarted
echo.
goto end
::=============================================================================
:9
echo.
call solr.cmd create -help
echo.
goto end
::=============================================================================
:10
echo.
call solr.cmd restart -p 8983
echo.
goto end
::=============================================================================
:11
echo.
call solr.cmd version
echo.
goto end
::=============================================================================
:12
echo.
call solr.cmd healthcheck -c gettingstarted
echo.
goto end
::=============================================================================
:13
echo.
call solr.cmd delete -c coreNameWillBeHere
echo.
goto end
::=============================================================================
:end
echo GggMessage: Program End.
echo.
::=============================================================================
pause>nul
 
::=============================================================================