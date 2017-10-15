angular.module("pwApp").config(function($routeProvider){
   $routeProvider.when("/home", {
           templateUrl: "templates/home.html"
        })
   .otherwise({
       redirectTo: "/home"
   });
});
