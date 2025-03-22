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
        default: "https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    status: {
        type: String,
        enum: ['To Read', 'Reading', 'Finished'],
        default: 'To Read'
    }
}, {timestamps: true});

// create model
const Book = mongoose.model('Book', bookSchema);

export default Book;