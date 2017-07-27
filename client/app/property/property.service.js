/**
 * Created by Allen on 2017-07-02.
 */

(function () {
    'use strict';

    angular.module('app')
        .factory('propertyService', propertyService);

    function propertyService($http, $log, Upload) {
        return {
          fetch_properties: fetchProperties,
          createProperty: createProperty
        };

        /**
         * @desc fetches property instances from the server
         * @returns {Promise}
         */
        function fetchProperties() {
            return $http({
                method: 'GET',
                url: '/api/properties/fetch'
            })
                .then(fetchPropertiesComplete)
                .catch(fetchPropertiesError);

            function fetchPropertiesComplete(response) {
                var properties = response.data;

                // trims the image urls
                // TODO fix this on server side
                properties.forEach(function (property) {
                    property.photos.forEach(function (photo) {
                        photo.url = photo.url.substring(7);
                    })
                });

                $log.debug(properties);

                return properties;
            }

            function fetchPropertiesError(err) {
                $log.error(err);

                return Promise.reject(err);
            }
        }

        /**
         * @desc creates a new instance of a property on the server
         * @param {Object} property
         * @returns {Promise}
         */
        function createProperty(property) {
            // property payload
            var newProperty = {
                photos: property.photos,
                short_desc: property.short_desc,
                rent: property.rent,
                availability: {
                    from: property.date.from,
                    to: property.date.to
                },
                addr: {
                    lat: property.addr.lat,
                    lng: property.addr.lng,
                    unit: property.addr.unit
                }
            };

            return Upload.upload({
                url: 'api/properties/create',
                arrayKey: '',
                data: newProperty
            })
                .then(createPropertyComplete)
                .catch(createPropertyError);

            function createPropertyComplete(response) {
                $log.debug(response);
                return response.data;
            }

            function createPropertyError(err) {
                $log.error('failed to create new property');
                $log.error(err);
                return Promise.reject(err);
            }
        }
    }

})();

