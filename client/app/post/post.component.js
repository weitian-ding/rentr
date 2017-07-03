/**
 * Created by Allen on 2017-05-24.
 */

(function() {
    'use strict';

    angular.module('app').component('post', {
        templateUrl: 'app/post/post.html',
        controller: function($scope, $mdToast, Upload) {

            // initialize property object
            $scope.property = {
                addr: {}
            };
            $scope.form_on_submit = false; // indicate whether the form is being posted to the server

            // min date for datepicker
            $scope.today = new Date();

            // post a new property
            $scope.create_property = function () {
                Promise.resolve()
                    .then(function () {
                        // TODO implement form validation
                        $scope.form_on_submit = true;
                    })
                    .then(function () {
                        // post the form
                        return Upload.upload({
                            url: 'api/properties/create',
                            arrayKey: '',
                            data: {
                                photos: $scope.property.photos,
                                short_desc: $scope.property.short_desc,
                                rent: $scope.property.rent,
                                availability: {
                                    from: $scope.property.date.from,
                                    to: $scope.property.date.to
                                },
                                addr: {
                                    lat: $scope.property.addr.lat,
                                    lng: $scope.property.addr.lng,
                                    unit: $scope.property.addr.unit
                                }
                            }
                        })
                    })
                    .then(function (resp) {
                        console.log(resp); // TODO implement success callback
                    }, function (resp) {
                        // TODO implement error handler
                        console.log('Error status: ' + resp.status);
                    })
                    .then(function () {
                        $scope.form_on_submit = false;
                        $scope.$apply();
                    });
            };

            // delete photo from property.photos
            $scope.delete_photo = function(photo) {
                var index = $scope.property.photos.indexOf(photo);
                $scope.property.photos.splice(index, 1);
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
                $scope.property.addr.lat = place.geometry.location.lat();
                $scope.property.addr.lng = place.geometry.location.lng();
                $scope.$apply();
            });
        }
    })
})();