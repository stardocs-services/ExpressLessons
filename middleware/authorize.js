const authorize = (req, res, next) =>{
    const{user} = req.query;
    if(user === 'Amos'){
        req.user = {
            name: 'Amos',
            id: 1
        }
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
    console.log("Authorized");
    next();
}
module.exports.authorize = authorize;