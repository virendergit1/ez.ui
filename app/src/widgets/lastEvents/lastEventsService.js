define(function () {
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