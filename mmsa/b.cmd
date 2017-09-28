call npm run build
rd ..\app\dist /s /q
md ..\app\dist
xcopy dist\*.* ..\app\dist /s
