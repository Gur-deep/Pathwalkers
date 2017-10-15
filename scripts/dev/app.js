'use strict';
(function() {
    var app = angular.module("pwApp", ["vcRecaptcha", "ngRoute", "ngMessages"]);
    //header controller
    app.controller("HeaderCtrl", function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    });
})();
