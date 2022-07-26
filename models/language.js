//dependencies
let mongoose = require('mongoose')
let {Schema} = mongoose

//Schema
let languageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    greeting: String,
    pangram: String,
    filler: String,
})

// model and export
let Language = mongoose.model('Language', languageSchema)
module.exports = Language



