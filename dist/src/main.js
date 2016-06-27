/**
 * easycollect.ui - 2016/06/27 01:38:10 UTC
*/

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularAnimate: '../bower_components/angular-animate/angular-animate.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
        ngResource: '../bower_components/angular-resource/angular-resource',
        angularScenario: '../bower_components/angular-scenario/angular-scenario',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        jquery: '../bower_components/jquery/dist/jquery.min',
        d3: '../bower_components/d3/d3',
        c3: '../bower_components/c3/c3',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        angularBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap',
        angularBootstrapTpl: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        text: '../bower_components/requirejs-text/text',
        lodash: '../bower_components/lodash/dist/lodash.min',
        ngIdle: '../bower_components/ng-idle/angular-idle.min',
        cgBusy: '../src/libs/angular-busy',
        angularTranslate: '../bower_components/angular-translate/angular-translate.min',
        angularTranslateLoaderStaticFiles: '../bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min',
        angularBreadcrumbs: '../bower_components/angular-utils-ui-breadcrumbs/uiBreadcrumbs',
        angularInform: '../bower_components/angular-inform/dist/angular-inform.min',
        sampleWidget: '../src/widgets/sampleWidgetModule',
        anotherWidget: '../src/widgets/anotherWidgetModule'
    },
    shim: {
        'jquery': {
            'exports': 'jquery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angularBootstrap': {
            deps: ['angular', 'jquery', 'bootstrap'],
            'exports': 'angularBootstrap'
        },
        'angularBootstrapTpl': {
            deps: ['angularBootstrap']
        },
        'd3': {
            'exports': 'd3'
        },
        'c3': {
            'exports': 'c3'
        },
        'angular': {
            'exports': 'angular'
        },
        'angularAnimate': {
            deps: ['angular'],
            'angularAnimate': 'ngAnimate'
        },
        'ngResource': {
            deps: ['angular']
        },
        'uiRouter': {
            deps: ['angular']
        },
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        'app': {
            deps: [
                'jquery',
                'angular',
                'angularAnimate',
                'bootstrap',
                'c3',
                'd3',
                'uiRouter',
                'ngIdle',
                'angularBootstrapTpl',
                'cgBusy',
                'angularTranslate',
                'angularTranslateLoaderStaticFiles',
                'angularBreadcrumbs',
                'angularInform',
                'sampleWidget',
                'anotherWidget'
            ]
        },
        'lodash': {
            'lodash': 'lodash'
        },
        'ngIdle': {
            deps: ['angular'],
            'ngIdle': { exports: "ngIdle" }
        },
        'cgBusy': {
            deps: ['angular'],
            'cgBusy': { exports: "cgBusy" }
        },
        'angularTranslate': {
            deps: ['angular'],
            'angularTranslate': { exports: 'angularTranslate' }
        },
        'angularTranslateLoaderStaticFiles': {
            deps: [
                'angular',
                'angularTranslate'
            ],
            'angularTranslateLoaderStaticFiles': { exports: 'angularTranslateLoaderStaticFiles' }
        },
        'angularBreadcrumbs': {
            deps: ['angular'],
            'angularBreadcrumbs': { exports: 'angularBreadcrumbs' }
        },
        'angularTreeControl': {
            deps: ['angular'],
            'angularTreeControl': { exports: 'angularTreeControl' }
        },
        'angularInform': {
            deps: ['angular'],
            'angularInform': { exports: 'angularInform' }
        },
        'sampleWidget': {
            deps: ['angular'],
            'sampleWidget': { exports: 'sampleWidget' }
        },
        'anotherWidget': {
            deps: ['angular'],
            'anotherWidget': { exports: 'anotherWidget' }
        }
    },
    priority: [
        "jquery",
        "angular"
    ]
});
require(
    [
        'jquery',
        'app',
        'c3',
        'lodash'
    ],
    function (jQuery, app, c3, lodash) {
       
        window.c3 = c3;
        window._ = lodash;
        window.$ = window.jQuery = $;

        $(document).ready(function () {
            $("body").tooltip({ selector: '[data-toggle=tooltip]' });

            $('body').popover({
                selector: '[data-toggle="popover"]',
                trigger: 'hover',
                placement: 'right'
            });
        });

        app.init();
    }
);


