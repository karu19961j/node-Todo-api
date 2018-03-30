let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,    //Property
        required: true,  //Validator
        minlength: 1,    //Validator
        trim: true       //Validator (removes whitespaces -> leading and trailing spaces)
    },
    completed: {
        type: Boolean,
        default: false  //Validator
    },
    completedAt: {
        type: Number,
        default: null   //Validator
    }
});

module.exports = {Todo};