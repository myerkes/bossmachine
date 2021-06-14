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

minionRouter.param('minionId', (req, res, next, id) => {
    const minion = db.getFromDatabaseById('minions', id);
    if (minion) {
      req.minion = minion;
      next();
    } else {
      res.status(404).send();
    }
});

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
    res.status(200).send(req.minion);
});

// POST create new minion and save to database
minionRouter.post('/', (req, res, next) => {
    try {
        let minion = req.body;
        db.addToDatabase('minions', minion);
        res.status(201).send(minion);
        next();
    } catch(err) {
        res.status(400).send(err.message);
    }
});

// PUT update minion by id
minionRouter.put('/:minionId', (req, res, next) => {
    try {
        let updMinion = db.updateInstanceInDatabase('minions', req.body);
        if (updMinion) {
            res.status(201).send(updMinion);
            next();
        }
        else {
            throw new Error('invalid inputs');
        }
    } catch(err) {
        res.status(400).send(err.message);
    }
});

// DELETE minion by id
minionRouter.delete('/:minionId', (req, res, next) => {
    db.deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(204).send();
    next();
});

///// Ideas /////
const ideaRouter = express.Router({mergeParams: true});
apiRouter.use('/ideas', ideaRouter);

ideaRouter.param('ideaId', (req, res, next, id) => {
    const idea = db.getFromDatabaseById('ideas', id);
    if (idea) {
      req.idea = idea;
      next();
    } else {
      res.status(404).send();
    }
});

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
    res.status(200).send(req.idea);
});

// POST create new idea and save to database
ideaRouter.post('/', (req, res, next) => {
    try {
        let idea = req.body;
        db.addToDatabase('ideas', idea);
        res.status(201).send(idea);
        next();
    } catch(err) {
        res.status(400).send(err.message);
    }
});

// PUT update idea by id
ideaRouter.put('/:ideaId', (req, res, next) => {
    try {
        let updIdea = db.updateInstanceInDatabase('ideas', req.body);
        if (updIdea) {
            res.status(201).send(updIdea);
            next();
        }
        else {
            throw new Error('invalid inputs');
        }
    } catch(err) {
        res.status(400).send(err.message);
    }
});

// DELETE idea by id
ideaRouter.delete('/:ideaId', (req, res, next) => {
    db.deleteFromDatabasebyId('ideas', req.params.ideaId);
    res.status(204).send();
    next();
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
meetingRouter.post('/', (req, res, next) => {
    try {
        let meeting = req.body;
        db.addToDatabase('meetings', meeting);
        res.status(201).send(meeting);
        console.log('working');
        next();
    } catch(err) {
        res.status(400).send(err.message);
    }
});

// DELETE all meetings
meetingRouter.delete('/', (req, res, next) => {
   let newSchedule = db.deleteAllFromDatabase('meetings');
   if (newSchedule === []) {
       res.status(204).send();
       next();
   }
   else {
       res.status(400).send();
   }
});


///// Last item /////
module.exports = apiRouter;
