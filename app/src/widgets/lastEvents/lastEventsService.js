define(function () {
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