angular.module('sampleWidget.template', ['/app/src/widgets/sampleWidget/sampleWidgetTemplate.html']);

angular.module("/app/src/widgets/sampleWidget/sampleWidgetTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/sampleWidget/sampleWidgetTemplate.html",
    "<div class=\"box box-primary\"><div class=\"box-header with-border\"><h3 class=box-title>My Current Allocation</h3><div class=\"box-tools pull-right\"><button type=button class=\"btn btn-box-tool\" data-widget=collapse><i class=\"fa fa-refresh\"></i></button> <button type=button class=\"btn btn-box-tool\" data-widget=collapse><i class=\"fa fa-cog\"></i></button> <button type=button class=\"btn btn-box-tool\" data-widget=remove><i class=\"fa fa-minus\"></i></button></div></div><div class=box-body><div class=chart><div id=char1>Accounts by group<div class=pull-right><a href=#>N</a> &nbsp; <a href=#>$</a> &nbsp; <a href=#>%</a>&nbsp;&nbsp;&nbsp;<div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown>Filter <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Filter1</a></li><li><a href=#>Filter2</a></li><li><a href=#>Filter3</a></li></ul></div></div></div></div></div></div>");
}]);

define("sampleWidget/sampleWidgetTemplate", function(){});

define('sampleWidget/sampleWidgetController',['require'],function (require) {
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
