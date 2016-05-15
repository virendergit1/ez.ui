define(function () {
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