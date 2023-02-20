const mongoose = require('mongoose');


const userMoviesSchema = mongoose.Schema({
    movie : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies"
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    watched:{
        type:Number,
        required:true,
        default:0
    }
    

},{timestamps:true});

const userMovieModel = mongoose.model("user_movies",userMoviesSchema);


module.exports = userMovieModel;