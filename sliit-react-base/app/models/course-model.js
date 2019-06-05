const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    passMark: {
        type: Number,
        required: true
    },
    lectureInCharge: {
        type: String,
        required: true
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref : 'subject'
    }]
});

module.exports = mongoose.model('course',courses);