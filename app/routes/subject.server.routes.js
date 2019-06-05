const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/subject-controller');

Router.post('/', function (req, res) {
    Controller.insertSubject(req.body).then((data) => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

Router.get('/', function (req, res) {
    Controller.getAllSubject().then((data) => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })

});

module.exports = Router;