'use strict';
(function() {
  var app = angular.module("pwApp", ["ngRoute", "ngMessages"]);
  //header controller
  app.controller("HeaderCtrl", function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
    $scope.goTo = function(req) {
      $location.path(req);
    }
  });
  app.controller("ContactCtrl", function($scope, $timeout) {
    $scope.submit = function() {
      $scope.isLoading = true;
      emailjs.send("pathwallkers_gmail", "contact_form", {
          "name": $scope.contact.name,
          "email": $scope.contact.email,
          "phone": $scope.contact.phone,
          "message": $scope.contact.message || 'NA'
        })
        .then(function(response) {
          console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
          $timeout(function() {
            $scope.success = true;
            $scope.isLoading = false;
            $scope.contact = {};
            $scope.contactForm.$setUntouched();
          });
        }, function(err) {
          console.log("FAILED. error=", err);
        });
    }
  });
})();
