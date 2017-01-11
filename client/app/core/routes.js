(function () {
    'use strict';

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            var checkLoggedIn = function ($q, $timeout, $http, $state) {
                // Initialize a new promise
                var deferred = $q.defer();
                // Make an AJAX call to check if the user is logged in
                $http.get('/users/loggedin').then(function (user) {
                    // Authenticated
                    if (user !== '0')
                        deferred.resolve();
                    // Not Authenticated
                    else {
                        console.log('not authorized');
                        deferred.reject();
                        $state.go('login');
                    }
                });
                return deferred.promise;
            };

           $urlRouterProvider.otherwise("/login");


            $stateProvider
                .state('login', {
                    url: "/login",
                    templateUrl: 'app/login/login.html'
                })
                .state('home', {
                    url: '/home',
                    component: 'layout',
                    resolve: {
                        loggedIn: checkLoggedIn
                    }
                })
                .state('home.welcome', {
                    url: '/landing',
                    component: 'home'
                });
        });

})();