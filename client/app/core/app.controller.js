/**
 * Created by Allen on 2016-07-14.
 */

(function () {
    'use strict';

    angular.module('app')
        .controller('AppCtrl', [ '$scope', '$rootScope', '$route', '$document', 'appConfig', AppCtrl]); // overall control

    function AppCtrl($scope, $rootScope, $route, $document, appConfig) {
    }

})();