var baasControllers = angular.module('baasControllers', []);

baasControllers.controller('menuCtrl', function ($scope, $location) {
    $scope.groups =
    [
        {
            "title": "GAME",
            "items": ['Properties', 'Assets', 'Data', 'Code', 'Versions']},
        {
            "title": "PLAYERS",
            "items": ['Login', 'Uploads', 'Inventory', 'Saves', 'Sync']},
        {
            "title": "ECONOMY",
            "items": ['Currencies']}
    ];

    $scope.menus = ['Grow','Analyze','Manage','Build'];

    $scope.isActive = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return true;
        } else {
            return false;
        }
    }

});

baasControllers.controller('CurrencyController', function($scope, $http) {
    $scope.currencies = [];

    $scope.types = [
        {id: 'type1', name: 'Integer'},
        {id: 'type2', name: 'Float'}
    ];

    $scope.setType = function(type) {
        $scope.selectedType = type;
    };

    $http.get('/currency/all').success(function (data, status, headers, config) {
        $scope.currencies = data;
    }).error(function (data, status, headers, config) {
        $scope.errorMessage = "Can't retrieve currencies list!";
    });

    $scope.deleteCurrency = function(id) {
        $http.delete('/currency/delete/' + id).success(function (data, status, headers, config) {
            $scope.currencies = $scope.currencies.filter(function(currency) {
                    return currency.id != id;
                }
            );
        }).error(function (data, status, headers, config) {
            $scope.errorMessage = "Can't delete currency!";
        });
    };

    $scope.addCurrency = function() {
        var currency = $scope.currency;
        var params = JSON.stringify(currency);
        $http.post('/currency/create', params, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).success(function (data, status, headers, config) {
            if(data.created) {
                $scope.currencies.push(data.newCurrency);
                $scope.currency = {};
                $scope.errorMessage = null;
            } else {
                $scope.errorMessage = "Adding currency failed!"
            }
        }).error(function (data, status, headers, config)   {
            $scope.errorMessage = "Adding currency failed!"
        });
    };

    $scope.menus = ['Build', 'Manage', 'Analyze', 'Grow'];

});
