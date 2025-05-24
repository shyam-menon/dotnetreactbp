# Start backend and frontend in separate processes

Write-Host "Starting .NET backend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $PSScriptRoot\backend\MyApp.Api; dotnet run"

Write-Host "Starting React frontend..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd $PSScriptRoot\frontend\my-app-frontend; npm run dev"

Write-Host "Development servers started!"
Write-Host "- Backend: http://localhost:5000"
Write-Host "- Frontend: http://localhost:3000"
