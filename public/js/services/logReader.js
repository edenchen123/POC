'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.logReader').factory('Logs', ['$resource', function($resource) {
    return $resource('logs/:level', {
        level: '@level'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);