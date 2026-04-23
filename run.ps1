# Bhairavi Home Stay - Run Script

Write-Host "Starting Bhairavi Home Stay Website Setup..." -ForegroundColor Green

# Start Backend
Write-Host "Launching Backend (Flask)..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; pip install -r requirements.txt; python app.py"

# Start Frontend
Write-Host "Launching Frontend (Vite)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd client; npm install; npm run dev"

Write-Host "Frontend will be available at http://localhost:5173" -ForegroundColor Green
Write-Host "Backend will be available at http://localhost:5000" -ForegroundColor Green
Write-Host "Press Ctrl+C to exit this script (though processes will remain open in new terminals)." -ForegroundColor Gray
