var baasModule = angular.module('baasModule', ['ngRoute', 'baasControllers']);

baasModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when("/list", {
            templateUrl: 'templates/list.html',
            controller: 'MessagesController'
        }).
        when('/quest', {
            templateUrl: 'templates/gcc.html',
            controller: 'QuestsController'
        }).
        when('/uicomponents', {
            templateUrl: 'templates/uicomponents.html'
        }).
        otherwise({
            redirectTo: '/quest'
        });
}]);

baasModule.directive("menu", function() {
    return {
        templateUrl: 'templates/uicomponents.html'
        //restrict: "E",
        //template: "",
        //transclude: true,
        //scope: {
        //    visible: "=",
        //    alignment: "@"
        //}
    };
});

baasModule.directive("menuItem", function() {
    return {
        restrict: "E",
        template: "",
        transclude: true,
        scope: {
            hash: "@"
        },
        link: function($scope) {
            $scope.navigate = function() {
                window.location.hash = $scope.hash;
            }
        }
    }
});
