define(function (require) {
    'use strict';

    require('sampleWidget/sampleWidgetTemplate');

    var angular = require('angular');
    var sampleWidgetController = require('sampleWidget/sampleWidgetController');
    var sampleWidgetService = require('sampleWidget/sampleWidgetService');
    var sampleWidgetDirective = require('sampleWidget/sampleWidgetDirective');

    var smapleWidgetModule = angular.module('sampleWidget', ['sampleWidget.template']);

    smapleWidgetModule
        .controller('sampleWidgetController', sampleWidgetController)
        .service('sampleWidgetService', sampleWidgetService)
        .directive('sampleWidgetDirective', sampleWidgetDirective);

    return smapleWidgetModule;
});