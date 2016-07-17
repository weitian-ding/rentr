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
                        templateUrl: 'app/survey/survey.html'
                    });
                    /*
                    .otherwise({
                        redirectTo: '/404'
                    });
                    */
            }]
        );

})();