angular.module('loggingStatus.template', ['/app/src/widgets/loggingStatus/loggingStatusTemplate.html']);

angular.module("/app/src/widgets/loggingStatus/loggingStatusTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/loggingStatus/loggingStatusTemplate.html",
    "<div class=\"box box-primary\"><div class=\"box-header with-border\"><h3 class=box-title>Today’s Logging Status</h3><div class=\"box-tools pull-right\"><button type=button class=\"btn btn-box-tool\" data-widget=collapse><i class=\"fa fa-refresh\"></i></button> <button type=button class=\"btn btn-box-tool\" data-widget=remove><i class=\"fa fa-minus\"></i></button></div></div><div class=box-body><table class=table><thead class=thead-inverse><tr><th>User Name</th><th>First Login</th><th>Current Status</th></tr></thead><tbody><tr><td>Neil</td><td>8:35 AM</td><td><span class=\"label label-success\">Online</span></td></tr><tr><td>Neo</td><td>8:30 AM</td><td><span class=\"label label-warning\">Idle</span></td></tr><tr><td>Jenifer</td><td>9:55 AM</td><td><span class=\"label label-warning\">Idle</span></td></tr><tr><td>Oliver</td><td>8:30 AM</td><td><span class=\"label label-danger\">Logged out</span></td></tr></tbody></table></div></div>");
}]);

define("loggingStatus/loggingStatusTemplate", function(){});

define('loggingStatus/loggingStatusController',['require'],function (require) {
    'use strict';

    var loggingStatusController = function () {
       
    };

    loggingStatusController.$inject = [];

    return loggingStatusController;
});
define('loggingStatus/loggingStatusService',[],function () {
    'user strict';
    var loggingStatusService = function () {
        var self = this;

        self.getMessage = function () {
            return 'hello from service';
        };
    };

    loggingStatusService.$inject = [];
    return loggingStatusService;
});
define('loggingStatus/loggingStatusDirective',[],function () {
    'use strict';
    var loggingStatusDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/loggingStatus/loggingStatusTemplate.html',
            controller: 'loggingStatustController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return loggingStatusDirective;
});
define('loggingStatus/loggingStatusModule',['require','loggingStatus/loggingStatusTemplate','angular','loggingStatus/loggingStatusController','loggingStatus/loggingStatusService','loggingStatus/loggingStatusDirective'],function (require) {
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
