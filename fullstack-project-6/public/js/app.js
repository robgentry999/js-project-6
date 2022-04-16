//Imports and sets up Express
const express = require('express');
const app = express;

//Require my json file
const { projects } = require('data.json');

/*
* Setup Middleware
*/

//sets view engine to pug
app.set('view engine', 'pug')

//serves items located in the public folder
app.use('/static', express.static('public'));




/*
* Setup Routes
*/

//render the home route
app.get('/', (req, res, next) => {
    //Render the Home Page
    res.render('index', { projects });

});


//render the about route
app.get('/about', (req, res, next) => {
    //Render the about Page
    res.render('about');
});


//start the server and log an error message the app is
//listening to port 3000
app.listen(3000, () => {
    console.log('The app is running on localhost: 3000');
});


