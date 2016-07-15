/**
 * Created by Allen on 2016-07-14.
 */

(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
                var routes, setRoutes;

                $routeProvider
                    .when('/', {
                        redirectTo: '/dashboard'
                    })
                    .when('/dashboard', {
                        templateUrl: 'app/dashboard/dashboard.html'
                    })
                    .when('/404', {
                        templateUrl: 'app/page/404.html'
                    })
                    .otherwise({
                        redirectTo: '/404'
                    });
            }]
        );

})();