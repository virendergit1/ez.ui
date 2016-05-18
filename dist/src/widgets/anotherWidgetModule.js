angular.module('anotherWidget.template', ['/app/src/widgets/anotherWidget/anotherWidgetTemplate.html']);

angular.module("/app/src/widgets/anotherWidget/anotherWidgetTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/anotherWidget/anotherWidgetTemplate.html",
    "<div class=row><div class=col-lg-4><div class=\"panel panel-default\"><div class=panel-heading><i class=\"fa fa-bar-chart-o fa-fw\"></i> Donut Chart Example<div class=pull-right><div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown>Actions <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li class=divider></li><li><a href=#>Separated link</a></li></ul></div></div></div><div class=panel-body><div id=chart2>Flow Chart</div></div></div></div></div>");
}]);

define("anotherWidget/anotherWidgetTemplate", function(){});

define('anotherWidget/anotherWidgetController',[],function () {
    'use strict';

    var anotherWidgetController = function ($scope, $window) {
        var chart = $window.c3.generate({
            data: {
                columns: [
                    ['data1', 30],
                    ['data2', 120]
                ],
                type: 'donut',
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            donut: {
                title: "Iris Petal Width"
            }
        });

        $("#chart2").append(chart.element);
    };

    anotherWidgetController.$inject = ['$scope', '$window'];

    return anotherWidgetController;
});
define('anotherWidget/anotherWidgetService',[],function () {
    'user strict';
    var anotherWidgetService = function () {
        var self = this;

        self.getMessage = function () {
            return 'hello from service';
        };
    };

    anotherWidgetService.$inject = [];
    return anotherWidgetService;
});
define('anotherWidget/anotherWidgetDirective',[],function () {
    'use strict';
    var anotherWidgetDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/anotherWidget/anotherWidgetTemplate.html',
            controller: 'anotherWidgetController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return anotherWidgetDirective;
});
define('anotherWidget/anotherWidgetModule',['require','anotherWidget/anotherWidgetTemplate','angular','anotherWidget/anotherWidgetController','anotherWidget/anotherWidgetService','anotherWidget/anotherWidgetDirective'],function (require) {
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
