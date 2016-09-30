/**
 * Created by Allen on 2016-07-14.
 */

(function () {
    'use strict';


    /*
    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
                var routes, setRoutes;

                $routeProvider
                    .when('/', {
                        templateUrl: 'app/survey/survey.html'
                    })
                    .when('/login', {
                        templateUrl: 'app/login/login.html',
                        controller: 'loginCtrl'
                     });
                    .otherwise({
                        redirectTo: '/404'
                    });
            }]
        );
        */

    angular.module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/login");

            $stateProvider
                .state('login', {
                    url: "/login",
                    templateUrl: 'app/login/login.html'
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/layout/wireframe.html'
                });
        });

})();