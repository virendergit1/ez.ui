define(function (require) {
    'use strict';

    require('anotherWidget/anotherWidgetTemplate');

    var angular = require('angular');
    var anotherWidgetController = require('anotherWidget/anotherWidgetController');
    var anotherWidgetService = require('anotherWidget/anotherWidgetService');
    var anotherWidgetDirective = require('anotherWidget/anotherWidgetDirective');

    var anotherWidgetModule = angular.module('anotherWidget', ['anotherWidget.template']);

    anotherWidgetModule
        .controller('anotherWidgetController', anotherWidgetController)
        .service('anotherWidgetService', anotherWidgetService)
        .directive('anotherWidgetDirective', anotherWidgetDirective);

    return anotherWidgetModule;
});