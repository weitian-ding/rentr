/**
 * Created by Allen on 2017-07-02.
 */

(function () {
    'use strict';

    angular.module('app')
        .service('propertyService', function($http) {
            this.fetch_properties = function() {
                return $http({
                    method: 'GET',
                    url: '/api/properties/fetch'
                })
            }
        });

})();

