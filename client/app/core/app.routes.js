(function () {
    'use strict';

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

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
                    component: 'search.results',
                    resolve: {
                        properties: function(propertyService) {
                            return propertyService.fetch_properties();
                        }
                    }
                })

                .state('home.post', {
                    url: '/property/create',
                    component: 'property.create'
                }
                );
        });

})();