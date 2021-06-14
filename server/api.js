const express = require('express');
const apiRouter = express.Router();

///// Minions /////
const minionRouter = express.Router({mergeParams: true});
apiRouter.use('/minions', minionRouter);

// GET all
minionRouter.get('/', (req, req, next) => {

});

// GET one
minionRouter.get('/:minionId', (req, req, next) => {

});

// POST create new minion and save to database
minionRouter.post('/', (req, req, next) => {

});

// PUT update minion by id
minionRouter.put('/:minionId', (req, req, next) => {

});

// DELETE minion by id
minionRouter.delete('/:minionId', (req, req, next) => {

});

///// Ideas /////
const ideaRouter = express.Router({mergeParams: true});
apiRouter.use('/ideas', ideaRouter);

// GET all
ideaRouter.get('/', (req, req, next) => {

});

// GET one
ideaRouter.get('/:ideaId', (req, req, next) => {

});

// POST create new idea and save to database
ideaRouter.post('/', (req, req, next) => {

});

// PUT update idea by id
ideaRouter.put('/:ideaId', (req, req, next) => {

});

// DELETE idea by id
ideaRouter.delete('/:ideaId', (req, req, next) => {

});

///// Meetings /////
const meetingRouter = express.Router({mergeParams: true});
apiRouter.use('/meetings', meetingRouter);
// GET all
meetingRouter.get('/', (req, res, next) => {

});

// POST create new meeting and save to database
meetingRouter.post('/meetings', (req, res, next) => {

});

// DELETE all meetings
meetingRouter.delete('/meetings', (req, res, next) => {

});


// Last item
module.exports = apiRouter;
