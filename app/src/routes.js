define(function() {
    var routes = function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard.html"
            });

    };
    return routes;
});