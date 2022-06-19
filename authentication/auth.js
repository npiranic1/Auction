const dotenv = require("dotenv")
// access to .env variables
dotenv.config()
const jwt = require("jsonwebtoken")

function authenticateToken(req, res){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) {
        res.status(401).send("You need to be logged in!");
        return;
    } // unknown identity

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err){
            res.status(403).send("Provided token is not valid!"); // user doesn't have access, user is known to the servers
            return;
        }
        req.user = user
        //next()
    }) 
};

module.exports = authenticateToken;