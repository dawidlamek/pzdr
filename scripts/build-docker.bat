@echo off
echo Building Docker images...
docker-compose build
if %ERRORLEVEL% NEQ 0 (
    echo Docker build failed!
    exit /b %ERRORLEVEL%
)
echo Docker images built successfully.
pause
