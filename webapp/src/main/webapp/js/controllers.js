var baasControllers = angular.module('baasControllers', []);

baasControllers.controller('QuestsController', function($scope, $http) {
    $scope.quests = [];

    $http.get('/java_script_quest/all').success(function (data, status, headers, config) {
        $scope.quests = data;

        //TODO impl parsing real questData from backend in D3 script
        getTest(data);

    }).error(function (data, status, headers, config) {
        $scope.errorMessage = "Can't retrieve quests list!";
        $scope.status = status;
    });

    $scope.activeClass = function() {
		return "el-container answer-success";
    }


});

baasControllers.controller('menuCtrl', function ($scope) {
    //$scope.menu = ['Game', 'Players', 'Economy'];
    $scope.groups =
    [
        {
            "title": "GAME",
            "items": ['Properties', 'Assets', 'Data', 'Code', 'Versions']},
        {
            "title": "PLAYERS",
            "items": ['Login', 'properties', 'Uploads', 'Inventory', 'Saves', 'Sync']},
        {
            "title": "ECONOMY",
            "items": ['Currencies']}
    ];
});

baasControllers.controller('MessagesController', function($scope, $http) {
    $scope.messages = [];

    $http.get('/message/all').success(function (data, status, headers, config) {
        $scope.messages = data;
    }).error(function (data, status, headers, config) {
        $scope.errorMessage = "Can't retrieve messages list!";
    });

    $scope.deleteMessage = function(id) {
        $http.delete('/message/delete/' + id).success(function (data, status, headers, config) {
            $scope.messages = $scope.messages.filter(function(message) {
                    return message.id != id;
                }
            );
        }).error(function (data, status, headers, config) {
            $scope.errorMessage = "Can't delete message!";
        });
    };

    $scope.sendMessage = function() {
        var message = $scope.message;
        var params = JSON.stringify(message);
        $http.post('/message/create', params, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).success(function (data, status, headers, config) {
            if(data.created) {
                $scope.messages.push(data.newMessage);
                $scope.message = {};
                $scope.errorMessage = null;
            } else {
                $scope.errorMessage = "Sending message failed!"
            }
        }).error(function (data, status, headers, config) {
            $scope.errorMessage = "Sending message failed!"
        });
    };
});
