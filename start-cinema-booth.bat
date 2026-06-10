@echo off
echo =========================================
echo   Starting Bollywood AI Cinema Booth...
echo =========================================
echo.

echo Starting Backend Server (Python API)...
start "Cinema Booth Backend" cmd /k "cd backend && pip install -r requirements.txt && python main.py"

echo Starting Frontend Server (Vite React)...
start "Cinema Booth Frontend" cmd /k "cd frontend && npm install && npm run dev"

echo.
echo Both servers have been launched in separate windows!
echo Your website will soon be available at: http://localhost:5173
echo.
pause
