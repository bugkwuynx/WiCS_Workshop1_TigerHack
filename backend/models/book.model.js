import mongoose from "mongoose";

// set up schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    cover_url: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['To Read', 'Reading', 'Finished'],
    }
}, {timestamps: true});

// create model
const Book = mongoose.model('Book', bookSchema);

export default Book;