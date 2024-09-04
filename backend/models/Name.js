const mongoose = require('mongoose');
const { Schema } = mongoose;

const nameSchema = new Schema({
    name: { type: String, required: true },
}, { collection: 'custom_names_collection' }); // Specify custom collection name

const Name = mongoose.model('Name', nameSchema);

module.exports = Name;
