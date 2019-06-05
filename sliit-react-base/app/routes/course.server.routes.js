const express = require('express');
const Router = express.Router();
const Controller = require('../controllers/course-controller');

Router.post('/', function (req, res) {
    Controller.insertCourse(req.body).then((data) => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

Router.get('/', function (req, res) {
    Controller.getAllCourse().then((data) => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })

});

Router.get('/:id', (req, res) => {
    Controller.getSubjectsForCourse(req.params.id).then(data => {
        res.status(200).send({data: data.data})
    }).catch(err => {
        res.status(500).send({message: 'Error : ' + err.message})
    })
});


module.exports = Router;
