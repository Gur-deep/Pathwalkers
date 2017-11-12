angular.module("pwApp").config(function($routeProvider) {
  $routeProvider.when("/home", {
      templateUrl: "templates/home.html"
    })
    .when("/paths", {
      templateUrl: "templates/paths.html"
    })
    .when("/contact", {
      templateUrl: "templates/contact.html",
      controller: "ContactCtrl"
    })
    .otherwise({
      redirectTo: "/home"
    });
});
