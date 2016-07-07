angular.module('lastEvents.template', ['/app/src/widgets/lastEvents/lastEventsTemplate.html']);

angular.module("/app/src/widgets/lastEvents/lastEventsTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/lastEvents/lastEventsTemplate.html",
    "<div class=row><div class=\"panel panel-default\"><div class=panel-heading><i class=\"fa fa-bar-chart-o fa-fw\"></i> Last 20 Events<div class=pull-right><div class=btn-group><button type=button class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=dropdown><i class=\"fa fa-gear\"></i> <span class=caret></span></button><ul class=\"dropdown-menu pull-right\" role=menu><li><a href=#>Action</a></li><li><a href=#>Another action</a></li><li><a href=#>Something else here</a></li><li class=divider></li><li><a href=#>Separated link</a></li></ul></div></div></div><div class=panel-body></div></div></div>");
}]);

define("lastEvents/lastEventsTemplate", function(){});

define('lastEvents/lastEventsController',['require'],function (require) {
    'use strict';

    var lastEventsController = function () {
        
    };

    lastEventsController.$inject = [];

    return lastEventsController;
});
define('lastEvents/lastEventsService',[],function () {
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
define('lastEvents/lastEventsDirective',[],function () {
    'use strict';
    var sampleWidgetDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/lastEvents/lastEventsTemplate.html',
            controller: 'sampleWidgetController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return sampleWidgetDirective;
});
define('lastEvents/lastEventsModule',['require','lastEvents/lastEventsTemplate','angular','lastEvents/lastEventsController','lastEvents/lastEventsService','lastEvents/lastEventsDirective'],function (require) {
    'use strict';

    require('lastEvents/lastEventsTemplate');

    var angular = require('angular');
    var lastEventsController = require('lastEvents/lastEventsController');
    var lastEventsService = require('lastEvents/lastEventsService');
    var lastEventsDirective = require('lastEvents/lastEventsDirective');

    var smapleWidgetModule = angular.module('lastEvents', ['lastEvents.template']);

    smapleWidgetModule
        .controller('lastEventsController', lastEventsController)
        .service('lastEventsService', lastEventsService)
        .directive('lastEventsDirective', lastEventsDirective);

    return smapleWidgetModule;
});
