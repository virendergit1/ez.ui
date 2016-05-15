define(function () {
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
    };

    anotherWidgetController.$inject = ['$scope', '$window'];

    return anotherWidgetController;
});