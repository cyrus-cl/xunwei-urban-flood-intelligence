@echo off
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js 18 or newer is required.
  exit /b 1
)
node "%~dp0static_server.mjs" --open %*
