define(function () {
    'use strict';
    var anotherWidgetDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/anotherWidget/anotherWidgetTemplate.html',
            controller: 'anotherWidgetController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return anotherWidgetDirective;
});