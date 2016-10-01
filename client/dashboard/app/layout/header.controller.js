(function () {
    'use strict';

    angular.module('app.header')
        .controller('headerCtrl', function ($scope, sessionService) {
            $scope.first_name = sessionService.get_first_name();
        });
})();

