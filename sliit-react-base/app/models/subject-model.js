const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subjects = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('subject',subjects);