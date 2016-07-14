angular.module('lastEvents.template', ['/app/src/widgets/lastEvents/lastEventsTemplate.html']);

angular.module("/app/src/widgets/lastEvents/lastEventsTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/widgets/lastEvents/lastEventsTemplate.html",
    "<div class=\"box box-primary\"><div class=\"box-header with-border\"><h3 class=box-title>Last 20 Events</h3><div class=\"box-tools pull-right\"><button type=button class=\"btn btn-box-tool\" data-widget=collapse><i class=\"fa fa-refresh\"></i></button> <button type=button class=\"btn btn-box-tool\" data-widget=remove><i class=\"fa fa-minus\"></i></button></div></div><div class=box-body><table class=table><thead class=thead-inverse><tr><th>Date/Time</th><th>Action</th><th>Results</th><th>Notes</th></tr></thead><tbody><tr><td>5/9/2016 –2:22:23</td><td>OC</td><td>NA</td><td>-</td></tr><tr><td>5/9/2016 –13:22:23</td><td>UPDTAG</td><td>UPDTAG</td><td>Tag ABC up...</td></tr><tr><td>5/9/2016 –3:22:23</td><td>WGCHNG</td><td>WGCHNG</td><td>SOFT to HARD</td></tr><tr><td>5/9/2016 –4:22:23</td><td>OC</td><td>NA</td><td>-</td></tr></tbody></table><div>*Columns between Result and Notes –Consumer/Account/Case, User</div></div></div>");
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
    var lastEventsService = function () {
        var self = this;

        self.getMessage = function () {
            return 'hello from service';
        };
    };

    lastEventsService.$inject = [];
    return lastEventsService;
});
define('lastEvents/lastEventsDirective',[],function () {
    'use strict';
    var lastEventsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/widgets/lastEvents/lastEventsTemplate.html',
            controller: 'lastEventstController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return lastEventsDirective;
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
