var baasModule = angular.module('baasModule', ['ngRoute', 'baasControllers']);

baasModule.config(['$routeProvider', function($routeProvider) {

    $routeProvider.
        //GAME ITEMS
        when("/Properties", {
            templateUrl: 'templates/properties.html'
        }).
        when('/Assets', {
            templateUrl: 'templates/assets.html'
        }).
        when('/Data', {
            templateUrl: 'templates/data.html'
        }).
        when('/Code', {
            templateUrl: 'templates/code.html'
        })
        .when('/Versions', {
            templateUrl: 'templates/versions.html'
        }).

        //PLAYERS ITEMS
        when("/Login", {
            templateUrl: 'templates/login.html'
        }).
        when('/Uploads', {
            templateUrl: 'templates/uploads.html'
        }).
        when('/Inventory', {
            templateUrl: 'templates/inventory.html'
        })
        .when('/Saves', {
            templateUrl: 'templates/saves.html'
        })
        .when('/Sync', {
            templateUrl: 'templates/sync.html'
        })

        //ECONOMY ITEMS
        .when('/Currencies', {
            templateUrl: 'templates/currencies.html',
            controller: 'CurrencyController'
        }).

        otherwise({
            redirectTo: '/Currencies'
        });
}]);

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

baasModule.directive('bsDropdown', function ($compile) {
    return {
        restrict: 'E',
        scope: {
            items: '=dropdownData',
            doSelect: '&selectVal',
            selectedItem: '=preselectedItem'
        },
        link: function (scope, element, attrs) {
            var html = '';
            switch (attrs.menuType) {
                case "button":
                    html += '<div class="btn-group"><button class="btn button-label btn-default btn-xs">Type </button><button class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown"><span class="caret"></span></button>';
                    break;
                default:
                    html += '<div class="dropdown"><a class="dropdown-toggle" role="button" data-toggle="dropdown"  href="javascript:;">Dropdown<b class="caret"></b></a>';
                    break;
            }
            html +=
                '<ul class="dropdown-menu">' +
                    '<li ng-repeat="item in items">' +
                        '<a tabindex="-1" data-ng-click="selectVal(item)">{{item.name}}</a>' +
                    '</li>' +
                '</ul></div>';
            element.append($compile(html)(scope));
            for (var i = 0; i < scope.items.length; i++) {
                if (scope.items[i].id === scope.selectedItem) {
                    scope.bSelectedItem = scope.items[i];
                    break;
                }
            }
            scope.selectVal = function (item) {
                if (item === undefined || item == null)
                    return;
                switch (attrs.menuType) {
                    case "button":
                        $('button.button-label', element).html(item.name);
                        break;
                    default:
                        $('a.dropdown-toggle', element).html('<b class="caret"></b> ' + item.name);
                        break;
                }
                scope.doSelect({
                    selectedVal: item.name
                    //selectedVal: item.id
                });
            };
            scope.selectVal(scope.bSelectedItem);
        }
    };
});
