var userControllers = angular.module('userControllers',[]);
// .config(function(){
//     console.log('Testing user module')
// })

userControllers.controller('regController', function($scope) {
    this.regUser = function(regData){
        console.log('testing new button');
        $scope.message = regData.username;
    };
});