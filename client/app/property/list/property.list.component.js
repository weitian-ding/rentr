/**
 * Created by Allen on 2017-05-21.
 */


(function() {
    'use strict';

    angular.module('app.property').component('propertyList', {
        bindings: { properties: '<' },
        templateUrl: 'app/property/list/property.list.html',
        controller: function($scope, $animate) {
            console.log(this.properties);

            /*
            $scope.properties = [];
            for (var i = 0; i < 20; i++) {
                var sample_property = {
                    id: i,
                    title: '15min bus to UW; Queen bed',
                    addr: {
                        line1: '432 Lausanne Crescent',
                        city: 'Waterloo',
                        province: 'ON',
                        post_code: 'N2T2X6'
                    },
                    rent: 500,
                    type: 'house',
                    capacity: 1
                };
                $scope.properties.push(sample_property)
            }
            */
        }
    })
})();