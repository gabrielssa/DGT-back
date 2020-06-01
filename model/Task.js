const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['alta', 'baixa'],
        required: true,
        lowercase: true
    }
});

module.exports = mongoose.model('Task', taskSchema);