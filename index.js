const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const movieRouter = require('./routes/movie-routes');
const userRouter = require('./routes/user-routes');
// const verifyToken = require('./verify-token');

// conneting to the mongodb server

mongoose.connect("mongodb://127.0.0.1:27017/streaming_app")
.then(()=>{
    console.log("Database connected");
})
.catch((err)=>{
    console.log(err);
})

app.use(express.json());
app.use(cors());

app.use('/movies',movieRouter);
app.use('/users',userRouter)


app.listen(8000,()=>{
    console.log("Server is running");
})