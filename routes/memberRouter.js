const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Members = require('../models/members');

const membersRouter = express.Router();

membersRouter.use(bodyParser.json());

membersRouter.route('/')
    .get((req, res, next) => {
        Members.find({})
            .then((members) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(members);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Members.create(req.body)
            .then((member) => {
                console.log('Leaders Created ', member);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(member);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /members');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /members');
    });

module.exports = membersRouter;