/**
 * Created by Allen on 2017-01-05.
 */
(function() {
  'use strict';

    angular.module('app').component('home', {
        templateUrl: 'app/home/home.html',
        controller: function($scope) {
            $scope.query = {};
            $scope.cities = [{city: 'Waterloo', state: 'ON'}, {city :'Toronto', state: 'ON'}];
            $scope.tenants = [1, 2, 3, 4, 5, 6];
            $scope.today = new Date();
        }
    })
})();