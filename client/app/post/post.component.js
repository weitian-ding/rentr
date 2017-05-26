/**
 * Created by Allen on 2017-05-24.
 */

(function() {
    'use strict';

    angular.module('app').component('post', {
        templateUrl: 'app/post/post.html',
        controller: function($scope, $mdToast, Upload) {
            $scope.pictures_to_upload = [];

            $scope.uploadFiles = function (photos) {
                if (photos && photos.length) {
                    Upload.upload({
                        url: 'upload',
                        arrayKey: '',
                        data: {
                            photos: photos
                        }}).then(function (resp) {
                            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                        }, function (resp) {
                            console.log('Error status: ' + resp.status);
                        }, function (evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                        });
                }
            }
        }
    })
})();