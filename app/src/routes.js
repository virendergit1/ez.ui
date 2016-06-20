define(function() {
    var routes = function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard.html"
            })
        .state('login', {
            url: "/login",
            templateUrl: "login.html"
        });

    };
    return routes;
});