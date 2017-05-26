/**
 * Created by Allen on 2017-05-24.
 */

(function() {
    'use strict';

    angular.module('app').component('post', {
        templateUrl: 'app/post/post.html',
        controller: function($scope, $mdToast) {
            $scope.obj = {};

            
            $scope.fuck_you = function ($file, $event, $flow) {
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('New image added.')
                        .position('top')
                        .hideDelay(3000)
                );
            }
        }
    })
})();