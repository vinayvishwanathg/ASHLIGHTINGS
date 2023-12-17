@echo off

:: Download and install Node.js
msiexec /i https://nodejs.org/dist/v14.17.4/node-v14.17.4-x64.msi /qn

:: Verify installation
node -v
npm -v
