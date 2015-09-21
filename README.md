# coveComponenents

## About
An extendable library of React Components ingesting KQED's media-api-service

## Requirements
- Node.js
- npm
- bower
- gulp
- nodemon

## Getting Started
- Clone/Fork the repo
- ``npm install``
- ``bower install``
- ``gulp`` 
  - This starts the browserify watch task and also starts up the server
  - browserify task watches for changes in the client folder and compiles the JSX from react into a bundle.js file in the public folder 
  - Must hit CTL + C twice to kill processes in terminal
  - Watches for changes in bundle and refresh accordingly
- Go to localhost:3000 in browser 

## Export an individual component
- Create an output folder in the top level directory of the project
- In the terminal run ``gulp exportComponent --component COMPONENT_TOP_LEVEL_FOLDER_NAME``
  - For example, to export the TV tabs, you should run ``gulp exportComponent --component TVScheduleTab``
- The gulp task will create a file in the output folder that you can use in projects
  - The console will log out where the id name of the element that the component will render to, or you can check the file.
