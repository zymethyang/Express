const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Humiditis = require('../models/humiditis');

const humiditisRouter = express.Router();

humiditisRouter.use(bodyParser.json());

humiditisRouter.route('/')
    .get((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /humiditis');
    })
    .post((req, res, next) => {
        Humiditis.create(req.body)
            .then((humiditis) => {
                console.log('Leaders Created ', humiditis);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(humiditis);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /humiditis');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /humiditis');
    });

humiditisRouter.route('/:username')
    .get((req, res, next) => {
        Humiditis.find({username : req.params.username}).limit(7).sort({updatedAt:-1})
            .then((humiditis) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(humiditis);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /humiditis');
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /humiditis');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /humiditis');
    });

module.exports = humiditisRouter;