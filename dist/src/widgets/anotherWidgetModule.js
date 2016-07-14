angular.module('anotherWidget.template', ['/app/src/widgets/anotherWidget/anotherWidgetTemplate.html']);

angular.module("/app/src/widgets/anotherWidget/anotherWidgetTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/anotherWidget/anotherWidgetTemplate.html",
    "<div class=\"box box-primary\"><div class=\"box-header with-border\"><h3 class=box-title>My Team's Allocation</h3><div class=\"box-tools pull-right\"><button type=button class=\"btn btn-box-tool\" data-widget=collapse><i class=\"fa fa-refresh\"></i></button> <button type=button class=\"btn btn-box-tool\" data-widget=collapse><i class=\"fa fa-cog\"></i></button> <button type=button class=\"btn btn-box-tool\" data-widget=remove><i class=\"fa fa-minus\"></i></button></div></div><div class=box-body><div class=chart><div id=chart2>Account Groups By Users<div class=pull-right><a href=#>N</a> &nbsp; <a href=#>$</a> &nbsp; <a href=#>%</a>&nbsp;&nbsp;&nbsp;<div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown>Filter <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Filter1</a></li><li><a href=#>Filter2</a></li><li><a href=#>Filter3</a></li></ul></div></div></div></div></div></div>");
}]);

define("anotherWidget/anotherWidgetTemplate", function(){});

define('anotherWidget/anotherWidgetController',[],function () {
    'use strict';

    var anotherWidgetController = function ($scope, $window) {
        var chart = $window.c3.generate({
            data: {
                columns: [
                    ['RECOVERY', 2, 4, 5,3],
                    ['HARDCOLL', 4, 2, 5, 3],
                    ['SOFTCOLL', 3, 5, 2, 6]
                ],
                type: 'bar',
                groups: [
                        ['RECOVERY', 'HARDCOLL', 'SOFTCOLL']
                ],
                onclick: function (d, i) { console.log("onclick", d, i); },
                onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                onmouseout: function (d, i) { console.log("onmouseout", d, i); }
            },
            axis: {
                x: {
                    type: 'category',
                    categories: ['Olivier', 'Nio', 'Neil', 'Jennifer']
                }
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
