define(function () {
    'use strict';
    var lastEventsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/lastEvents/lastEventsTemplate.html',
            controller: 'lastEventstController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return lastEventsDirective;
});