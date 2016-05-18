angular.module('sampleWidget.template', ['/app/src/widgets/sampleWidget/sampleWidgetTemplate.html']);

angular.module("/app/src/widgets/sampleWidget/sampleWidgetTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/sampleWidget/sampleWidgetTemplate.html",
    "<div class=row><div class=col-lg-4><div class=\"panel panel-default\"><div class=panel-heading><i class=\"fa fa-bar-chart-o fa-fw\"></i> Pie Chart Example<div class=pull-right><div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown>Actions <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li class=divider></li><li><a href=#>Separated link</a></li></ul></div></div></div><div class=panel-body><div id=char1>Flow Chart</div></div></div></div></div>");
}]);

define("sampleWidget/sampleWidgetTemplate", function(){});

define('sampleWidget/sampleWidgetController',['require'],function (require) {
    'use strict';

    var sampleWidgetController = function ($scope, $window) {
        var chart = $window.c3.generate({
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120],
                    ['data3', 60]
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
define('sampleWidget/sampleWidgetService',[],function () {
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
define('sampleWidget/sampleWidgetDirective',[],function () {
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
define('sampleWidget/sampleWidgetModule',['require','sampleWidget/sampleWidgetTemplate','angular','sampleWidget/sampleWidgetController','sampleWidget/sampleWidgetService','sampleWidget/sampleWidgetDirective'],function (require) {
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
