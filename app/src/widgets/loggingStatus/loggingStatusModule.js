define(function (require) {
    'use strict';

    require('loggingStatus/loggingStatusTemplate');

    var angular = require('angular');
    var loggingStatusController = require('loggingStatus/loggingStatusController');
    var loggingStatusService = require('loggingStatus/loggingStatusService');
    var loggingStatusDirective = require('loggingStatus/loggingStatusDirective');

    var smapleWidgetModule = angular.module('loggingStatus', ['loggingStatus.template']);

    smapleWidgetModule
        .controller('loggingStatusController', loggingStatusController)
        .service('loggingStatusService', loggingStatusService)
        .directive('loggingStatusDirective', loggingStatusDirective);

    return smapleWidgetModule;
});