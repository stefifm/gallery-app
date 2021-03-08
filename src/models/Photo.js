const mongoose = require('mongoose');
const { Schema } = mongoose;



const Photo = new Schema ({
    title: { type: String},
    description: { type: String},
    imageURL: { type: String},
    public_id: { type: String}
})

module.exports = mongoose.model('Photo', Photo);