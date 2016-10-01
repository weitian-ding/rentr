(function () {
    'use strict';

    angular.module('app.login')
        .controller('loginCtrl', function ($scope, sessionService, $http, $location) {
            $scope.user = {};

            $scope.login = function() {
                $http({
                    method: 'POST',
                    url: '/users/login',
                    data: {
                        username: $scope.user.email,
                        password: $scope.user.password
                    }
                }).success(function (user) {
                    console.log(user);
                    sessionService.set_first_name(user.first_name);
                    $location.path("home");
                }).catch(function (response) {
                    console.log(response.data || "login failed");
                    console.log(response.status);
                });
            }
        });
})();
