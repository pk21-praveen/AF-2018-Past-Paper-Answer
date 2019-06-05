const CourseSchema = require('../models/course-model');

const CourseController = function () {
    this.insertCourse = (data) => {
        return new Promise(((resolve, reject) => {
            let course = new CourseSchema(data);
            course.save().then(() => {
                resolve({status: 200, message: 'Course Added !!!'});
            }).catch(err => {
                reject({status: 404, message: 'Error :' + err});
            })
        }));
    };

    this.getAllCourse = () => {
        return new Promise(((resolve, reject) => {
            CourseSchema.find().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 404, message: 'Error :' + err});
            })
        }));
    };

    this.getSubjectsForCourse = (id) => {
        return new Promise(((resolve, reject) => {
            CourseSchema.find({_id:id}).populate('subjects').exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 404, message: 'Error :' + err});
            })
        }));
    };

};

module.exports = new CourseController();