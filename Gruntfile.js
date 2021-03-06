﻿module.exports = function(grunt) {
    'use strict';

    var setHtml2JsDefaultOptions = function(moduleTemplateNamespace) {
        return {
            rename: function(moduleName) {
                return '/' + moduleName;
            },
            base: '',
            module: moduleTemplateNamespace,
            useStrict: true,
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeCommentsFromCDATA: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                keepClosingSlash: true,
                caseSensitive: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            watch: true
        };
    };

    var path = require('path');

    grunt.initConfig({
        distDirectory: 'dist',
        distMainDirectory: '<%= distDirectory %>/src',
        cssDistDirectory: '<%= distDirectory %>/src/css',
        distLibs: '<%= distDirectory %>/libs',
        pkg: grunt.file.readJSON('package.json'),
        src: {
            js: ['<%= pkg.sourceDir %>/src/**/*.js'],
            srcJs: ['<%= pkg.sourceDir %>/src/*.js'],
            html: ['<%= pkg.sourceDir %>/src/**/*.html'],
            indexHtml: ['index.html'],
            htmlPages: ['<%= pkg.sourceDir %>/src/pages/**/*.html'],
            mainJs: ['main.js'],
            libsJs: ['<%= pkg.sourceDir %>/src/libs/*.js'],
            serviceJs: ['<%= pkg.sourceDir %>/src/services/**/*.js'],
            apiProxiesJs: ['<%= pkg.sourceDir %>/src/apiProxies/**/*.js'],
            widgetsJs: ['<%= pkg.sourceDir %>/src/widgets/**/*.js'],
            cssDirectory: '<%= pkg.sourceDir %>/src/assets/css/**/*.css',
        },
        meta: {
            banner: '/**\n' +
                ' * <%= pkg.name %> - <%= grunt.template.today("UTC:yyyy/mm/dd HH:MM:ss Z") %>\n' +
                '*/'
        },
        test: {
            karmaConfig: '<%= pkg.sourceDir %>/tests/config/karma.conf.js',
            unit: ['<%= pkg.sourceDir %>/tests/unit/**/*.js']
        },
        eslint: {
            options: {
                configFile: "eslintrc.json",
                ignore: true,
                ignorePath: ".eslintignore"
            },
            src: ['Gruntfile.js', '<%= src.js %>', '<%= test.unit %>']
        },
        watch: {
            eslint: {
                files: ['<%= src.js %>', '<%= src.htmlPages%>', '<%= test.unit %>', '<%= test.karmaConfig %>', 'Gruntfile.js', 'mainJs'],
                tasks: ['eslint'],
                options: {
                    interrupt: true
                }
            },
            less: {
                files: ['<%= src.lessAll %>'],
                tasks: ['buildcss']
            },
            release: {
                files: ['<%= src.js %>', '<%= src.html %>', '<%= test.unit %>'],
                tasks: ['release'],
                options: {
                    spawn: false,
                    interrupt: true,
                    reload: false
                }
            }
        },
        clean: {
            appRelease: ['<%= distMainDirectory %>/src'],
            testResults: ['<%=pkg.sourceDir %>/tests/reports'],
            css: ['<%= cssDistDirectory %>']
        },
        html2js: {
            sampleWidget: {
                options: setHtml2JsDefaultOptions('sampleWidget.template'),
                src: '<%= pkg.sourceDir %>/src/widgets/sampleWidget/*.html',
                dest: '<%= distMainDirectory %>/src/widgets/sampleWidgetTemplate.js'
            },
            anotherWidget: {
                options: setHtml2JsDefaultOptions('anotherWidget.template'),
                src: '<%= pkg.sourceDir %>/src/widgets/anotherWidget/*.html',
                dest: '<%= distMainDirectory %>/src/widgets/anotherWidgetTemplate.js'
            },
            lastEvents: {
                options: setHtml2JsDefaultOptions('lastEvents.template'),
                src: '<%= pkg.sourceDir %>/src/widgets/lastEvents/*.html',
                dest: '<%= distMainDirectory %>/src/widgets/lastEventsTemplate.js'
            },
            loggingStatus: {
                options: setHtml2JsDefaultOptions('loggingStatus.template'),
                src: '<%= pkg.sourceDir %>/src/widgets/loggingStatus/*.html',
                dest: '<%= distMainDirectory %>/src/widgets/loggingStatusTemplate.js'
            }
        },
        copy: {
            indexHtml: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.indexHtml %>'],
                        dest: '<%= distMainDirectory %>'
                    }
                ]
            },
            srcJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.srcJs %>'],
                        dest: '<%= distMainDirectory %>/src/ez'
                    }
                ]
            },
            mainJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.mainJs %>'],
                        dest: '<%= distMainDirectory %>'
                    }
                ]
            },
            appCss: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.cssDirectory %>'],
                        dest: '<%= cssDistDirectory %>'
                    }
                ]
            },
            htmlPages: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.htmlPages %>'],
                        dest: '<%= distMainDirectory %>/pages'
                    }
                ]
            },
            libsJs: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.libsJs %>'],
                        dest: '<%= distMainDirectory %>/libs'
                    }
                ]
            },
            services: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.serviceJs %>'],
                        dest: '<%= distMainDirectory %>/src/services'
                    }
                ]
            },
            apiProxies: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.apiProxiesJs %>'],
                        dest: '<%= distMainDirectory %>/src/apiProxies'
                    }
                ]
            },
            widgets: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['<%= src.widgetsJs %>'],
                        dest: '<%= distMainDirectory %>/src/widgets'
                    }
                ]
            }
        },
        requirejs: {
            compile: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    name: "app",
                    out: "dist/src/app.js",
                    baseUrl: "<%= distDirectory %>",
                    paths: {
                        'app': './src/src/ez/app',
                        'route': './src/src/ez',
                        'angular': 'empty:',
                        'uiRouter': 'empty:',
                        'spin': 'empty:',
                        'sampleWidget/sampleWidgetModule': 'empty:',
                        'anotherWidget/anotherWidgetModule': 'empty:',
                        'lastEvents/lastEventsModule': 'empty:',
                        'loggingStatus/loggingStatusModule': 'empty:',
                        'ngidle': 'empty:'
                    }
                }
            },
            sampleWidget: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'sampleWidget/sampleWidgetModule',
                    out: 'dist/src/widgets/sampleWidgetModule.js',
                    paths: {
                        'sampleWidget': './dist/src/src/widgets',
                        'anotherWidget': 'empty:',
                        'angular': 'empty:'
                    }
                }
            },
            anotherWidget: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'anotherWidget/anotherWidgetModule',
                    out: 'dist/src/widgets/anotherWidgetModule.js',
                    paths: {
                        'anotherWidget': './dist/src/src/widgets',
                        'sampleWidget': 'empty:',
                        'angular': 'empty:'
                    }
                }
            },
            lastEvents: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'lastEvents/lastEventsModule',
                    out: 'dist/src/widgets/lastEventsModule.js',
                    paths: {
                        'lastEvents': './dist/src/src/widgets',
                        'sampleWidget': 'empty:',
                        'anotherWidget': 'empty:',
                        'loggingStatus': 'empty:',
                        'angular': 'empty:'
                    }
                }
            },
            loggingStatus: {
                options: {
                    optimize: "none",
                    logLevel: 0,
                    mainConfigFile: 'main.js',
                    name: 'loggingStatus/loggingStatusModule',
                    out: 'dist/src/widgets/loggingStatusModule.js',
                    paths: {
                        'loggingStatus': './dist/src/src/widgets',
                        'sampleWidget': 'empty:',
                        'anotherWidget': 'empty:',
                        'lastEvents': 'empty:',
                        'angular': 'empty:'
                    }
                }
            }
        },
        usebanner: {
            dist: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: {
                    src: [
                        '<%= distDirectory%>/src/*.js'
                    ]
                }
            },
            css: {
                options: {
                    banner: '<%= meta.banner %>'
                },
                files: {
                    src: [
                        '<%= cssDirectory %>/*.css'
                    ]
                }
            }
        },
        less: {

        },
        concurrent: {
            dev: {
                tasks: ['watch:release', 'eslint', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        express: {
            server: {
                options: {
                    port: 9001,
                    hostname: "localhost",
                    server: path.resolve('./server.js'),
                    bases: [path.resolve('dist/src')],
                    debug: true
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= express.server.options.port %>/'
            }
        }

    });

    grunt.registerTask('release', [
        //'buildcss',
        'eslint',
        'copyfiles',
        'html2JS',
        'requirejs',
        'usebanner:dist',
        'clean:appRelease'
    ]);

    grunt.registerTask('default', ['release']);

    //grunt.registerTask('buildcss', [
    //    'clean:css',
    //    'less',
    //    'usebanner:css'
    //]);

    grunt.registerTask('html2JS', [
        'html2js:sampleWidget',
        'html2js:anotherWidget',
        'html2js:lastEvents',
        'html2js:loggingStatus'
    ]);

    grunt.registerTask('copyfiles', [
        'copy:indexHtml',
        'copy:srcJs',
        'copy:mainJs',
        'copy:htmlPages',
        'copy:libsJs',
        'copy:services',
        'copy:apiProxies',
        'copy:widgets',
        'copy:appCss'
    ]);

    grunt.registerTask('web-start', ['release', 'express:server', 'open:server', 'express-keepalive']);
    grunt.registerTask('dev', ['release', 'concurrent']);

    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', 'grunt*', '@*/grunt-*'] });
    require('time-grunt')(grunt);
        
};