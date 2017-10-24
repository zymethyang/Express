const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Temps = require('../models/temps');

const tempsRouter = express.Router();

tempsRouter.use(bodyParser.json());

tempsRouter.route('/')
    .get((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /temps');
    })
    .post((req, res, next) => {
        Temps.create(req.body)
            .then((temps) => {
                console.log('Leaders Created ', temps);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(temps);
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

tempsRouter.route('/:username')
    .get((req, res, next) => {
        Temps.find({username : req.params.username}).limit(7).sort({updatedAt:-1})
            .then((temps) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(temps);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /members');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /members');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /members');
    });

module.exports = tempsRouter;