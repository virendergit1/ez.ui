define(function (require) {
    'use strict';

    require('lastEvents/lastEventsTemplate');

    var angular = require('angular');
    var lastEventsController = require('lastEvents/lastEventsController');
    var lastEventsService = require('lastEvents/lastEventsService');
    var lastEventsDirective = require('lastEvents/lastEventsDirective');

    var smapleWidgetModule = angular.module('lastEvents', ['lastEvents.template']);

    smapleWidgetModule
        .controller('lastEventsController', lastEventsController)
        .service('lastEventsService', lastEventsService)
        .directive('lastEventsDirective', lastEventsDirective);

    return smapleWidgetModule;
});