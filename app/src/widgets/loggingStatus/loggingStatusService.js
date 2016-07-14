define(function () {
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