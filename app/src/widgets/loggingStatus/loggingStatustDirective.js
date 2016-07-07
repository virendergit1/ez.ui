define(function () {
    'use strict';
    var sampleWidgetDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/loggingStatus/loggingStatusTemplate.html',
            controller: 'sampleWidgetController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return sampleWidgetDirective;
});