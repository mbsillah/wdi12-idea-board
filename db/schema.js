const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
    title: {
        type: String,
        default: "New Title"
    },
    description: {
        type: String,
        default: "New Idea Description"

    },
    created: { 
        type: Date, 
        default: Date.now }
})

const UserSchema = new Schema({
    userName: String,
    password: {
        type: String,
        require: true
    },
    ideas: [IdeaSchema]
})

const Idea = mongoose.model('Idea', IdeaSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Idea, User
}