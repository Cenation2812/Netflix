const express = require('express');
const router = express.Router();
const movieModel = require('../models/moviemodel');
const userMovieModel = require('../models/user_movie_model');


// endpoint for creating a movie

router.post('/',(req,res)=>{
    movieModel.create(req.body)
    .then((ans)=>{
        res.send("Movie created");
    })
    .catch((err)=>{
        console.log(err);
    })
})

// endpoint for reading all the movies

router.get('/',(req,res)=>{
    movieModel.find()
    .then((movies)=>{
        res.send(movies);
    })
    .catch((err)=>{
        console.log(err);
    })
})

// endpoint for deleting a movie

router.delete('/:id',(req,res)=>{
    let id = req.params.id;

    movieModel.deleteOne({_id:id})
    .then((msg)=>{
        res.send("movie deleted");
    })
    .catch((err)=>{
        console.log(err);
    })
})

// endpoint for updating a movie
router.put('/:id',(req,res)=>{
    let id = req.params.id;

    movieModel.updateOne({_id:id},req.body)
    .then((msg)=>{
        res.send("Movie updated");
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/play/:filename',(req,res)=>{
    // streaming code
    // const range = re1.headers.range;
    // if(!range)
    // {
    //     res.send({message:"Please provide a range"});
    // }
    // let videosize = 
})


router.post('/closeplayer/:user_movie_id',(req,res)=>{
    const id = req.params.user_movie_id;
    const data = req.body;
    userMovieModel.updateOne({_id:id},data)
    .then((msg)=>{
        res.send("Done");
    })
    .catch((err)=>{
        console.log(err);
    })
})



module.exports = router;