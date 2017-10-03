var userControllers = angular.module('userControllers',[]);
// .config(function(){
//     console.log('Testing user module')
// })



userControllers.controller('regController', function($http) {
    var app = this;
    this.regUser = function(regData){
        // console.log(this.regData);
        app.loading = true;
        app.errorMsg = false; //With this I can use ng-show just to display what is is needed in the html
        // app.successMsg = false;
        console.log('Form submitted');
        $http.post('/api/users', this.regData)
        .then(function(data){
            // console.log(data.data.success);
            // console.log(data.data.message);
            if(data.data.success){
                app.loading = false;
                // create susccess message
                // redirect to home page
                app.successMsg = data.data.message;
            }else{
                app.loading = false;
                // Create error message
                app.errorMsg = data.data.message;
            }
        });
    };
});