const mongoose = require('mongoose');

const invalidTokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('InvalidToken', invalidTokenSchema);