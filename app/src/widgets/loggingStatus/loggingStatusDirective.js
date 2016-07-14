define(function () {
    'use strict';
    var loggingStatusDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/loggingStatus/loggingStatusTemplate.html',
            controller: 'loggingStatustController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return loggingStatusDirective;
});