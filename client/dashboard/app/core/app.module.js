/**
 * Created by Allen on 2016-07-14.
 */

(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        'ngRoute',
        'ngAnimate',
        'ngMaterial',

        // 3rd Party Modules

        // Custom modules
        'app.login',
        'app.sidebar',
        'app.header'
    ]);

})();