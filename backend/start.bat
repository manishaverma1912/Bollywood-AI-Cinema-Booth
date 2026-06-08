@echo off

echo ==============================
echo Starting Face Swap API Server
echo ==============================

REM Go to project directory
cd /d C:\Users\InfoBeans\Downloads\face-swap-main\face-swap-main

REM Activate virtual environment
call venv\Scripts\activate

REM Start FastAPI server
uvicorn main:app --host 0.0.0.0 --port 8000

pause
