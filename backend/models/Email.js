const mongoose = require('mongoose');
const { Schema } = mongoose;

const emailSchema = new Schema({
    email: { type: String, required: true, unique: true },
}, { collection: 'custom_emails_collection' }); // Specify custom collection name

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;
