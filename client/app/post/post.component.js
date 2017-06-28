/**
 * Created by Allen on 2017-05-24.
 */

(function() {
    'use strict';

    angular.module('app').component('post', {
        templateUrl: 'app/post/post.html',
        controller: function($scope, $mdToast, Upload) {

            // initilize form object
            $scope.form = {
                addr: {}
            };
            $scope.progress = {};

            // post form
            $scope.post = function () {
                if ($scope.form.photos && $scope.form.photos.length) {
                    Upload.upload({
                        url: 'post',
                        arrayKey: '',
                        data: {
                            photos: $scope.form.photos,
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
                            console.log(evt);
                            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                            // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                        });
                }
            };

            // delete photo from form.photos
            $scope.delete_photo = function(photo) {
                var index = $scope.form.photos.indexOf(photo);
                $scope.form.photos.splice(index, 1);
            };

            // google address auto complete
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
        }
    })
})();