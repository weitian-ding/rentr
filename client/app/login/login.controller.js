(function () {
    'use strict';

    angular.module('app.login')
        .controller('loginCtrl', function ($scope, sessionService, $http, $state) {
            $scope.user = {};

            $scope.login = function () {
                $http({
                    method: 'POST',
                    url: '/users/login',
                    data: {
                        username: $scope.user.email,
                        password: $scope.user.password
                    }
                }).then(function (user) {
                    console.log(user);
                    sessionService.set_first_name(user.first_name);
                    $state.go('home.welcome');
                }, function (response) {
                    console.log(response.data || "login failed");
                    console.log(response.status);
                });
            };
        })
})();
