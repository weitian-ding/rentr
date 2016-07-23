/*
 * login controller
 */

(function () {
    'use strict';

    angular.module('app.login')
        .controller('loginCtrl', function ($scope, $http) {

            // TODO remove hard-coded credential
            $http({
                method: 'POST',
                url: '/login',
                data: {
                    username: 'aliceyiqunwang@hotmail.com',
                    password: 'Alice123'
                }
            }).success(function(user) {
                console.log(user);
            });
        });
})();
