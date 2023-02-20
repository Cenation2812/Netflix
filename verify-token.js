const jwt = require('jsonwebtoken');

function verifyToken(req,res,next)
{
    if(req.headers.Authorization!==undefined)
    {
        let token = req.headers.Authorization.split(" ")[1];
        jwt.verify(token,"secret",(err,data)=>{
            if(err === null || err === undefined)
            {
                next();
            }
            else
            {
                res.send("provide a valid token");
            }
        })
    }
    else{
        console.log("Some prob");
    }
     
    
}

module.exports = verifyToken;