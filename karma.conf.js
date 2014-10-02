module.exports = function(config){
  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath : '',

    frameworks : [ 'jasmine' ],
    // list of files / patterns to load in the browser
    files : [
      // Test dependencies
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'src/angular-password-validator.js',
      // Test dependencies
      'test/angular-password-validator.test.js'
    ],

    // web server port
    port : 1317,

    // cli runner port
    runnerPort : 1318,

    // enable / disable colors in the output (reporters and logs)
    colors : true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel : config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers : [ 'PhantomJS' ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun : true

  });
};
