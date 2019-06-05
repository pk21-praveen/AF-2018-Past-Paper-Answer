const SubjectSchema = require('../models/subject-model');

const SubjectController = function () {
    this.insertSubject = (data) => {
        return new Promise(((resolve, reject) => {
            let subject = new SubjectSchema(data);

            subject.save().then((res) => {
                resolve({status:200,message:'Subject Added !!!'});
            }).catch(err => {
                reject({status:404,message:'Error :' + err});
            })
        }));
    };

    this.getAllSubject = () => {
        return new Promise(((resolve, reject) => {
            SubjectSchema.find().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 404, message: 'Error :' + err});
            })
        }));
    };
};

module.exports = new SubjectController();