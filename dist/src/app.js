/**
 * easycollect.ui - 2016/05/18 16:20:59 UTC
*/
define('src/src/services/validatorService',[],function () {
    'user strict';
    var validatorSerice = function () {
        var self = this;
        self.isValidJson = function (jsonObj) {
            return jsonObj && typeof jsonObj === "object" ? true : false;
        };

        self.isValidFunction = function (functionToTest) {
            return functionToTest instanceof Function;
        };
    };
    validatorSerice.$inject = [];
    return validatorSerice;
});
define('src/src/apiProxies/baseApiProxy',[], function () {
    'use strict';

    var baseApiProxy = function ($http, $q, validatorService) {
        var self = this;

        var isApiResponseInvalid = function (response) {
            return (!response && validatorService.isValidJson(response));
        };

        self.getJSONHttpConfig = function (api, method, params, data) {
            var config = {
                url: api,
                method: method,
                data: data,
                params: params,
                timeout: 30000
            };
            return config;
        };

        self.getApiResponse = function (apiConfig) {
            var deferred = $q.defer();
            $http(apiConfig)
                .success(function (data) {
                    return isApiResponseInvalid(data) ? self.rejectResponse(data) : deferred.resolve(data);
                })
                .error(function (error) {
                    self.rejectResponse(error);
                });
            return deferred.promise;
        };

        self.rejectResponse = function (data) {
            var deferred = $q.defer();
            return deferred.reject(data);
        };
    };

    baseApiProxy.$inject = ['$http', '$q', 'dk.validatorService'];
    return baseApiProxy;
});
define('route/routes',[],function() {
    var routes = function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard.html"
            });

    };
    return routes;
});
define('src/src/services/utilities',[],function () {
    'user strict';
    var utilitiesService = function () {
        var self = this;

        self.guid = function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
    };
    utilitiesService.$inject = [];
    return utilitiesService;
});
define('src/src/services/alertTypeConstant',[],function() {
    return {
        "alertType": {
            DEFAULT: 'default',
            PRIMARY: 'primary',
            SUCCESS: 'success',
            INFO: 'info',
            WARNING: 'warning',
            DANGER: 'danger'
        }
    };
});
define('src/src/services/alertService',[],function () {
    'user strict';
    var alertService = function (inform) {
        var self = this;

        self.addAlert = function(alert, type) {
            inform.add(alert, {
                ttl: 2000, type: type
            });
        };

        self.addAlertWithoutTimeToLive = function (alert, type) {
            inform.add(alert, {
                ttl: 0, type: type
            });
        };

        self.removeAlert = function (id) {
            inform.remove(id);
        };

        self.clearAlert = function () {
            inform.clear();
        };
    };

    alertService.$inject = ['inform'];
    return alertService;
});
define('app',['require','angular','src/src/services/validatorService','src/src/apiProxies/baseApiProxy','route/routes','src/src/services/utilities','src/src/services/alertTypeConstant','src/src/services/alertService','sampleWidget/sampleWidgetModule','anotherWidget/anotherWidgetModule'],function(require) {
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

    var app = angular.module('myApp', ['ui.router', 'inform', 'sampleWidget', 'anotherWidget']);

    app.config(routes);

    app
        .constant('alertTypeConstant', alertTypeConstant)
        .service('validatorService', validatorService)
        .service('alertService', alertService)
        .service('baseApiProxy', baseApiProxy)
        .service('utilitiesService', utilitiesService)
        .run(function() {

        });


    app.init = function() {
        angular.bootstrap(document, ['myApp']);
    };

    return app;

});
