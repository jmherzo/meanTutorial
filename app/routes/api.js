var User = require('../models/users');

module.exports = (router) => {
    // Route for users to register http://localhost:5000/api/users
    router.post('/users', (req,res) => {
        // Create a criteria to know which is the error in creating a user
        var newUser = new User();
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.email = req.body.email;
        if(req.body.username == "" || req.body.username == null){
            res.json({sucess: false, message:"Username is incorrect"});
        }else if(req.body.password == "" || req.body.password == null){
            res.json({sucess: false, message:"Password is incorrect"});
        }else if(req.body.email == "" || req.body.email == null) {
            res.json({sucess: false, message:"Email is incorrect"});
        }else {
            // Creating the user and saving it into the mongodb database
            newUser.save((err)=>{
                // This checks if there is an error in saving an user if the user is already created
                if(err) {
                    res.json({success: false, message: "username already registered"})
                }else{
                    res.json({success: true, message: 'user created'});
                }
            });
        } 
    });
    return router
}