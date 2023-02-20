const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Entering name is mandatory"]
    },
    posterURL:{
        type:String,
        required:[true,"Poster url is mandatory"],
        unique:true
    },
    imdbRating:{
        type:Number,
        required:true,
        min:1,
        max:10
    },
    description:{
        type:String,
        required:true,
        minLength:50,
        maxLength:500
    },
    genre:{
        type:String,
        required:true,
        enum:["Drama","sci-fi","Horror","Love","Action"]
    },
    releaseDate:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true
    },
    filepath:{
        type:String,
        required:true,
        unique:true
    }
})

// creating the movie model

const movieModel = mongoose.model("movies",movieSchema);

module.exports = movieModel;
