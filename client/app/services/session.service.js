(function () {
    'use strict';

    angular.module('app')
        .service('sessionService', function($sessionStorage) {
            this.set_first_name = function(first_name) {
                $sessionStorage.first_name = first_name;
            };

            this.get_first_name = function() {
                return $sessionStorage.first_name;
            };
        });

})();
