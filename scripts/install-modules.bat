@echo off
echo Installing node modules for frontend...
cd FE
call npm install

cd ..

echo Installing node modules for backend...
cd BE
call npm install

echo Node modules installed for all projects.
