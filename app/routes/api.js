var User = require('../models/users');

module.exports = (router) => {
    // Route for users to register
    router.post('/users', (req,res) => {
        // Create a criteria to know which is the error in creating a user
        if(req.body.username == "" || req.body.username == null){
            res.send("Username is incorrect");
        }else if(req.body.password == "" || req.body.password == null){
            res.send("Password is incorrect");
        }else if(req.body.email == "" || req.body.email == null) {
            res.send("Email is incorrect ");
        }else {
            // Creating the user and saving it into the mongodb database
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.password = req.body.password;
            newUser.email = req.body.email;
            newUser.save((err)=>{
                // This checks if there is an error in saving an user if the user is already created
                if(err) {
                    res.send("username already registered - " + err);
                }else{
                    res.send('user created');
                }
            });
        } 
    });
    return router
}