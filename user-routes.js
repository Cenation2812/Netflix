const express = require('express');
const router = express.Router();
const userModel = require('../models/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userMovieModel = require('../models/user_movie_model');
const verifyToken = require('../verify-token');


router.post('/',(req,res)=>{
    let userData = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        if(err === null || err === undefined)
        {
            bcrypt.hash(userData.password,salt,(err,encPass)=>{
                if(err === null || err === undefined)
                {
                    userData.password = encPass;

                    userModel.create(userData)
                    .then((msg)=>{
                        res.send({msg:"User created successfully"});
                    })
                    .catch((err)=>{
                        console.log("Some problem");
                        res.send("User cannot be created");
                    })

                }
            })
        }
    })

    
})

router.post('/login',(req,res)=>{
    let user = req.body;
    console.log(user);
    userModel.findOne({email:user.email})
    .then((userData)=>{
        console.log(userData);
        if(userData !== undefined)
        {
            
                    
                            bcrypt.compare(user.password, userData.password,(err,result)=>{
                                if(err === null || err === undefined)
                                {
                                    console.log(result);
                                    console.log("inside1");
                                    if(result === true)
                                    {
                                        console.log("inside2");
                                        jwt.sign(JSON.stringify(user),"secret",(err,token)=>{
                                            console.log("inside jwt");
                                            console.log(err);
                                            if(err === null || err === undefined)
                                            {
                                                res.send({status:result,"token":token});
                                            }

                                        });
                                        
                                    }
                                    else
                                    {
                                        console.log(result);
                                        res.send("Invalid password");
                                    }
                                        
                                }
                                
                            
                            })
        }
        else
        {
            res.send("User does not exist");
        }
    })
    .catch((err)=>{
        console.log("Some problem");
    })

})

router.post('/something',verifyToken,(req,res)=>{
    res.send("I am a secure endpoint");
})



router.post("/play",(req,res)=>{
    const userMovie = req.body;

    userMovieModel.findOne({user:userMovie.user, movie:userMovie.movie})
    .then((data)=>{
        if(data !== undefined)
        {
            userMovieModel.create(userMovie)
            .then((msg)=>{
                res.send("Done");
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else{
            res.send({message:"Record already present"});
        }
    })
    .catch((err)=>{
        console.log(err);
    })  

})


module.exports = router;