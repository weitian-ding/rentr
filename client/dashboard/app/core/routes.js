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
        .config(function ($stateProvider, $urlRouterProvider) {
            var checkLoggedin = function ($q, $timeout, $http, $location, $rootScope) {
                // Initialize a new promise
                var deferred = $q.defer();
                // Make an AJAX call to check if the user is logged in
                $http.get('/users/loggedin').success(function (user) {
                    // Authenticated
                    if (user !== '0')
                        deferred.resolve();
                    // Not Authenticated
                    else {
                        console.log('not authorized');
                        $rootScope.message = 'You need to log in.';
                        deferred.reject();
                        $location.path('login');
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
                    templateUrl: 'app/layout/wireframe.html',
                    resolve: {
                        loggedin: checkLoggedin
                    }
                });
        });

})();