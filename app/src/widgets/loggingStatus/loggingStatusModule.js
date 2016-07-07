define(function (require) {
    'use strict';

    require('loggingStatus/sampleWidgetTemplate');

    var angular = require('angular');
    var loggingStatusController = require('loggingStatus/sampleWidgetController');
    var loggingStatusService = require('loggingStatus/sampleWidgetService');
    var loggingStatusDirective = require('loggingStatus/sampleWidgetDirective');

    var smapleWidgetModule = angular.module('loggingStatus', ['loggingStatus.template']);

    smapleWidgetModule
        .controller('loggingStatusController', loggingStatusController)
        .service('loggingStatusService', loggingStatusService)
        .directive('loggingStatusDirective', loggingStatusDirective);

    return smapleWidgetModule;
});