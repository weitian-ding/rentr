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
                    console.log(user.data);
                    sessionService.set_first_name(user.data.first_name);
                    $state.go('home.query');
                }, function (response) {
                    console.log(response.data || "login failed");
                    console.log(response.status);
                });
            };
        })
})();
