(function () {
    'use strict';

    angular.module('app').component('layout', {
        templateUrl: '/app/layout/layout.html',
        controller: function($scope, sessionService) {
            $scope.first_name = sessionService.get_first_name()
        }
    });

})();
