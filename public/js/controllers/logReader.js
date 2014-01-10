'use strict';

angular.module('mean.logReader').controller('LogReaderController', ['$scope', '$routeParams', '$location', 'Global', 'Logs',
    function ($scope, $routeParams, $location, Global, Logs) {

        $scope.getLogs = function () {
            Logs.query(function (logs) {
                $scope.logs = logs;
            });
        };
    }]);