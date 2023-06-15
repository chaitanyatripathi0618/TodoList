const mongoose = require('mongoose');
const crudSchema = new mongoose.Schema({
    foodName: { 
        type: String,
        required: true
    },
    dateSinceAte: {
        type: String,
        required: true
    }
    

});

const Crud = mongoose.model('Crud', crudSchema);
module.exports = Crud;