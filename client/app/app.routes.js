(function () {
    'use strict';

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            // TODO refactor to a service
            var checkLoggedIn = function ($q, $timeout, $http, $state, sessionService) {
                var deferred = $q.defer();

                $http.get('/users/loggedin').then(function (user) {
                    // Authenticated
                    if (user.data !== '0') {
                        sessionService.set_first_name(user.data.first_name);
                        deferred.resolve();
                        // Not Authenticated
                    } else {
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
                    templateUrl: 'app/users/user.login.html'
                })

                .state('app', {
                    abstract: true,
                    url: '/home',
                    component: 'layout',
                    resolve: {
                        loggedIn: checkLoggedIn
                    }
                });

                /*
                .state('home.query', {
                    url: '',
                    component: 'propertySearch'
                })

                .state('home.search', {
                    url: '/search/results',
                    component: 'propertyList',
                    resolve: {
                        properties: function(propertyService) {
                            return propertyService.fetch_properties();
                        }
                    }
                })

                .state('home.post', {
                    url: '/property/create',
                    component: 'propertyCreate'
                }
                );
                */
        });

})();