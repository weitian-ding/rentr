(function () {
    'use strict';

    angular.module('app.login')
        .controller('loginCtrl', function ($scope, $sessionStorage, $http) {
            $scope.user = {};

            $scope.login = function() {
                $http({
                    method: 'POST',
                    url: '/login',
                    data: {
                        username: $scope.user.email,
                        password: $scope.user.password
                    }
                }).success(function (user) {
                    console.log(user);
                    $sessionStorage.first_name = user.first_name;
                });
            }
        });
})();
