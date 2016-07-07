angular.module('sampleWidget.template', ['/app/src/widgets/sampleWidget/sampleWidgetTemplate.html']);

angular.module("/app/src/widgets/sampleWidget/sampleWidgetTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/sampleWidget/sampleWidgetTemplate.html",
    "<div class=row><div class=\"panel panel-default\"><div class=panel-heading><i class=\"fa fa-bar-chart-o fa-fw\"></i> My Current Allocation<div class=pull-right><div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-gear\"></i> <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li class=divider></li><li><a href=#>Separated link</a></li></ul></div></div></div><div class=panel-body><div id=char1>Accounts by group<div class=pull-right><a href=#>N</a> &nbsp; <a href=#>$</a> &nbsp; <a href=#>%</a>&nbsp;&nbsp;&nbsp;<div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown>Filter <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Filter1</a></li><li><a href=#>Filter2</a></li><li><a href=#>Filter3</a></li></ul></div></div></div></div></div></div>");
}]);

define("loggingStatus/sampleWidgetTemplate", function(){});

define('loggingStatus/sampleWidgetController',['require'],function (require) {
    'use strict';

    var sampleWidgetController = function ($scope, $window) {
        var chart = $window.c3.generate({
            data: {
                columns: [
                    ['SOFTCOLL', 30],
                    ['HARDCOLL', 120],
                    ['FIELDVIS', 60],
                    ['PRELEGAL', 60]
                ],
                type: 'pie',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            }
        });

        $("#char1").append(chart.element);
    };

    sampleWidgetController.$inject = ['$scope', '$window'];

    return sampleWidgetController;
});
define('loggingStatus/sampleWidgetService',[],function () {
    'user strict';
    var sampleWidgetService = function () {
        var self = this;

        self.getMessage = function () {
            return 'hello from service';
        };
    };

    sampleWidgetService.$inject = [];
    return sampleWidgetService;
});
define('loggingStatus/sampleWidgetDirective',[],function () {
    'use strict';
    var sampleWidgetDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/sampleWidget/sampleWidgetTemplate.html',
            controller: 'sampleWidgetController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return sampleWidgetDirective;
});
define('loggingStatus/loggingStatusModule',['require','loggingStatus/sampleWidgetTemplate','angular','loggingStatus/sampleWidgetController','loggingStatus/sampleWidgetService','loggingStatus/sampleWidgetDirective'],function (require) {
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
