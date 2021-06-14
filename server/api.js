const express = require('express');
const db = require('./db.js');
const apiRouter = express.Router();

/*
For all /api/minions and /api/ideas routes, any POST or PUT requests will send their 
new/updated resources in the request body. POST request bodies will not have an id property, 
you will have to set it based on the next id in sequence.

For /api/meetings POST route, no request body is necessary, as meetings are generated 
automatically by the server upon request. Use the provided createMeeting function exported 
from db.js to create a new meeting object.

The server/db.js file exports helper functions for working with the database arrays. 
These functions always take at least one argument, and the first argument is always a 
string representing the name of the database model: 'minions', 'ideas', 'meetings', or 'work'.

getAllFromDatabase(modelName)
getFromDatabaseById(modelName, id)
addToDatabase(modelName, object)
updateInstanceInDatabase(modelName, object)
deleteFromDatabasebyId(modelName, id)
deleteAllFromDatabase(modelName)
*/


///// Minions /////
const minionRouter = express.Router({mergeParams: true});
apiRouter.use('/minions', minionRouter);

// GET all
minionRouter.get('/', (req, res, next) => {
    let minions = db.getAllFromDatabase('minions');
    if (minions) {
        res.status(200).send(minions);
    }
    else {
        res.status(404).send();
    }
    next();
});

// GET one
minionRouter.get('/:minionId', (req, res, next) => {

});

// POST create new minion and save to database
minionRouter.post('/', (req, res, next) => {

});

// PUT update minion by id
minionRouter.put('/:minionId', (req, res, next) => {

});

// DELETE minion by id
minionRouter.delete('/:minionId', (req, res, next) => {
    
});

///// Ideas /////
const ideaRouter = express.Router({mergeParams: true});
apiRouter.use('/ideas', ideaRouter);

// GET all
ideaRouter.get('/', (req, res, next) => {
    let ideas = db.getAllFromDatabase('ideas');
    if (ideas) {
        res.status(200).send(ideas);
    }
    else {
        res.status(404).send();
    }
    next();
});

// GET one
ideaRouter.get('/:ideaId', (req, res, next) => {

});

// POST create new idea and save to database
ideaRouter.post('/', (req, res, next) => {

});

// PUT update idea by id
ideaRouter.put('/:ideaId', (req, res, next) => {

});

// DELETE idea by id
ideaRouter.delete('/:ideaId', (req, res, next) => {

});

///// Meetings /////
const meetingRouter = express.Router({mergeParams: true});
apiRouter.use('/meetings', meetingRouter);

// GET all
meetingRouter.get('/', (req, res, next) => {
    let meetings = db.getAllFromDatabase('meetings');
    if (meetings) {
        res.status(200).send(meetings);
    }
    else {
        res.status(404).send();
    }
    next();
});

// POST create new meeting and save to database
meetingRouter.post('/meetings', (req, res, next) => {
    
});

// DELETE all meetings
meetingRouter.delete('/meetings', (req, res, next) => {
    db.deleteAllFromDatabase('meetings');
    next();
});


///// Last item /////
module.exports = apiRouter;
