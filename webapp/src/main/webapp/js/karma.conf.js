// Karma configuration
// Generated on Thu Jun 04 2015 08:55:59 GMT+0300 (FLE Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery','jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../lib/angular.js',
      '../lib/angular-mocks.js',
      '../lib/angular-route.js',
      '../lib/jasmine.js',
      'd3/d3.min.js',
      'd3/jquery-1.11.3.min.js',
      'application.js',
      'controllers.js',
      'test/baasSpec.js',
      'test/mock/baas-currencies-mock.json',
      // JSON fixture
      { pattern:  'test/mock/*.json',
        watched:  true,
        served:   true,
        included: false },
    ],

    // list of files to exclude
    exclude: [
      '../lib/angular-scenario.js'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    shim: {"angular-mocks": {deps:["angular", "boot"], exports: "angular.mock"}},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
      // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],
    browsers: ['PhantomJS', 'PhantomJS_custom'],

    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--load-images=true'],
        debug: true
      }
    },

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    capabilities: {
      'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/',

    plugins: [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine-jquery',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
