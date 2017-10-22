'use strict';
(function() {
    var app = angular.module("pwApp");

    app.directive("pwHeader", function() {
        return {
            restrict: "E",
            templateUrl: "templates/header.html"
        };
    });

    app.directive("pwFooter", function() {
        return {
            restrict: "E",
            templateUrl: "templates/footer.html"
        };
    });

    app.directive("animatedLogo", function() {
        return {
            restrict: "E",
            templateUrl: 'templates/animatedLogo.html'
        };
    });

    app.directive("hamburg", function() {
        return {
            restrict: "E",
            templateUrl: 'templates/hamburg.html'
        };
    });

    app.directive("mainLoader", function() {
        return {
            restrict: "E",
            templateUrl: 'templates/mainLoader.html'
        };
    });

    app.directive("loader", function() {
        return {
            restrict: "E",
            template: '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        };
    });

    app.directive('imageonload', function($timeout, $compile) {
        return {
            link: function(scope, element, attrs) {
                element.hide("fast");
                var loader = angular.element('<loader></loader>');
                loader.insertAfter(element);
                $compile(loader)(scope);
                function imageLoaded() {
                    $timeout(function() {
                        element.show("fast");
                        loader.remove();
                    }, 100);
                }
                element.each(function() {
                    if (element.complete) {
                        imageLoaded.call(element);
                    } else {
                        element.one('load', imageLoaded);
                    }
                });
            }
        };
    });
})();
