/**
 * Created by Allen on 2017-07-26.
 */


(function () {
    'use strict';

    angular
        .module('app.property')
        .config(config);

    /* @ngInject */
    function config($stateProvider) {

        $stateProvider

            .state('app.property', {
                url: '/property',
                abstract: true,
                template: '<ui-view>'
            })

            .state('app.property.search', {
                url: '/search',
                component: 'propertySearch'
            })

            .state('app.property.list', {
                url: '/list',
                component: 'propertyList',
                resolve: {
                    properties: function(propertyService) {
                        return propertyService.fetch_properties();
                    }
                }
            })

            .state('app.property.create', {
                    url: '/property/create',
                    component: 'propertyCreate'
                }
            );
    }



/*
function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
}


function getStates() {
    return [

        {
            state: 'home.query',
            config: {
                url: '',
                component: 'propertySearch'
            }
        },

        {
            state: 'home.search',
            config: {
                url: '/search/results',
                component: 'propertyList',
                resolve: {
                    properties: function(propertyService) {
                        return propertyService.fetch_properties();
                    }
                }
            }
        },

        {
            state: 'home.post',
            config: {
                url: '/property/create',
                component: 'propertyCreate'
            }
        }

    ];
}
*/

})();