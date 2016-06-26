define(function () {
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