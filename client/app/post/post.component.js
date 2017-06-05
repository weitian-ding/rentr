/**
 * Created by Allen on 2017-05-24.
 */

(function() {
    'use strict';

    angular.module('app').component('post', {
        templateUrl: 'app/post/post.html',
        controller: function($scope, $mdToast, Upload) {

            $scope.form = {};
            $scope.form.photos_to_upload = [];
            $scope.form.addr = {};
            $scope.progress = {};

            var autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('autocomplete')),
                {
                    types: ['geocode'],
                    componentRestrictions: {country: ['ca']}
                });
            autocomplete.addListener('place_changed', function() {
                var place = autocomplete.getPlace();
                $scope.form.addr.lat = place.geometry.location.lat();
                $scope.form.addr.lng = place.geometry.location.lng();
                $scope.$apply();
            });


            $scope.$watchCollection('photos_submitted', function() {
                if ($scope.photos_submitted) {
                    $scope.form.photos_to_upload = $scope.form.photos_to_upload.concat($scope.photos_submitted);
                }
            });

            $scope.post = function () {
                if ($scope.form.photos_to_upload && $scope.form.photos_to_upload.length) {
                    Upload.upload({
                        url: 'post',
                        arrayKey: '',
                        data: {
                            photos: $scope.form.photos_to_upload,
                            short_desc: $scope.form.short_desc,
                            rent: $scope.form.rent,
                            availability: {
                                from: $scope.form.date.from,
                                to: $scope.form.date.to
                            },
                            addr: {
                                lat: $scope.form.addr.lat,
                                lng: $scope.form.addr.lng,
                                unit: $scope.form.addr.unit
                            }
                        }}).then(function (resp) {
                            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                        }, function (resp) {
                            console.log('Error status: ' + resp.status);
                        }, function (evt) {
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            $scope.progress = evt;
                            $scope.apply();
                            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                        });
                }
            }
        }
    })
})();