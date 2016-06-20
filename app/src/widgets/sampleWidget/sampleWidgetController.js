define(function (require) {
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