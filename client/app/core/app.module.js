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
        'ngMessages',


        // 3rd Party Modules
        'ngStorage',
        'ui.router',


        // Custom modules
        'app.login',
        'app.sidebar',
        'app.header'
    ]);

})();