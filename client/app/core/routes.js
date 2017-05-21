(function () {
    'use strict';

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            var checkLoggedIn = function ($q, $timeout, $http, $state) {
                var deferred = $q.defer();

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
                .state('landing', {
                    url: '/landing',
                    templateUrl: 'app/landing/landing.html'
                })

                .state('login', {
                    url: "/login",
                    templateUrl: 'app/login/login.html'
                })

                .state('home', {
                    abstract: true,
                    url: '/home',
                    component: 'layout',
                    resolve: {
                        loggedIn: checkLoggedIn
                    }
                })

                .state('home.query', {
                    url: '',
                    component: 'home'
                })

                .state('home.search', {
                    url: '/search/results',
                    component: 'search.results'
                });
        });

})();