This example illustrates how to get the back-end Express app and the front-end React app to work together. To do this
VERY simple back-end and front-end applications are used. 

Examine each of the following components of this example code:
1. Consider the project structure of this example. 
2. Open server.js and read through the comments and code in this file. 
3. Open ./frontend/src/App.js and see how the Fetch API has been used to make calls to the routes specified in server.js.
4. Open ./frontend/package.json to see how the Express app has been set as the Proxy

To run this code:
1. cd backend
2. npm install
3. npm start
4. cd frontend
5. npm install
6. npm start
7. http://localhost:3000/name   