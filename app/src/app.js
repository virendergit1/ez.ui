define(function (require) {
    'use strict';

    var angular = require('angular');

    var validatorService = require('src/src/services/validatorService');
    var baseApiProxy = require('src/src/apiProxies/baseApiProxy');
    var routes = require('route/routes');
    var utilitiesService = require('src/src/services/utilities');
    var alertTypeConstant = require('src/src/services/alertTypeConstant');
    var alertService = require('src/src/services/alertService');

    require("sampleWidget/sampleWidgetModule");
    require("anotherWidget/anotherWidgetModule");
    require("lastEvents/lastEventsModule");
    require("loggingStatus/loggingStatusModule");

    var app = angular.module('myApp',
        [
            'ui.router',
            'inform',
            'sampleWidget',
            'anotherWidget',
            'lastEvents',
            'loggingStatus'
        ]);

    app.config(routes);

    app
        .constant('alertTypeConstant', alertTypeConstant)
        .service('validatorService', validatorService)
        .service('alertService', alertService)
        .service('baseApiProxy', baseApiProxy)
        .service('utilitiesService', utilitiesService)
        .run(function () {

        });


    app.init = function () {
        angular.bootstrap(document, ['myApp']);
    };

    return app;

});