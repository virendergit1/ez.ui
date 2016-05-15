module.exports = function(grunt) {
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
            widgetsJs: ['<%= pkg.sourceDir %>/src/widgets/**/*.js']
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
            app: {
                options: {
                    port: 54567,
                    hostname: 'localhost',
                    scheme: 'http',
                    showStack: true
                }
            }
        },
        open: {
            app: {
                path: 'http://localhost:<%= express.app.options.port %>/<%= distMainDirectory %>/index.html'
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
        'html2js:anotherWidget'
    ]);

    grunt.registerTask('copyfiles', [
        'copy:indexHtml',
        'copy:srcJs',
        'copy:mainJs',
        'copy:htmlPages',
        'copy:libsJs',
        'copy:services',
        'copy:apiProxies',
        'copy:widgets'
    ]);

    grunt.registerTask('web-start', ['release', 'express:app', 'open:app', 'express-keepalive']);
    grunt.registerTask('dev', ['release', 'concurrent']);

    require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', 'grunt*', '@*/grunt-*'] });
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
};