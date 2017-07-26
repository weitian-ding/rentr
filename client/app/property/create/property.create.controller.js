/**
 * Created by Allen on 2017-07-26.
 */


(function() {
    'use strict';

    angular.module('app')
        .controller('PropertyCreateCtrl', PropertyCreateController);

    function PropertyCreateController($scope, $log, Upload, propertyService) {

        var vm = this;

        vm.create_property = createProperty;
        vm.deletePhoto = deletePhoto;
        vm.today = new Date();
        vm.property = { addr: {} };

        activate(vm);


        function activate(vm) {

            $scope.form_on_submit = false; // indicate whether the form is being posted to the server

            // google address auto complete
            var autocomplete = new google.maps.places.Autocomplete(
                (document.getElementById('autocomplete')),
                {
                    types: ['geocode'],
                    componentRestrictions: {country: ['ca']}
                });

            autocomplete.addListener('place_changed', function() {
                var place = autocomplete.getPlace();
                vm.property.addr.lat = place.geometry.location.lat();
                vm.property.addr.lng = place.geometry.location.lng();
            });
        }

        /**
         * @desc posts a new property
         * @param property
         */
        function createProperty(property) {
            $scope.form_on_submit = true;

            propertyService
                .createProperty(property)
                .then(function () {
                    $scope.form_on_submit = false;
                    $scope.$apply();
                })
                .catch(function(err) {
                    $log.error('Oops, something went wrong...');
                    $scope.form_on_submit = false;
                    $scope.$apply();
                });
        }

        /**
         * @desc deletes a photo from the property
         * @param property
         * @param photo
         */
        function deletePhoto(property, photo) {
            var index = property.photos.indexOf(photo);
            property.photos.splice(index, 1);
        }

    }
})();
