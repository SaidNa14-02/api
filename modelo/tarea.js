const mongoose = require('mongoose');

const TareaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    descripcion:{
        type:String,
        required: false
    }
});

module.exports = mongoose.model('Tarea', TareaSchema);