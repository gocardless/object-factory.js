'use strict';

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: './',


    // list of files / patterns to load in the browser
    files: [
      'components/bower-eddy-x/eddy-x.js',
      'components/bower-redefine/redefine.js',
      'object-factory.js',
      'object-factory.spec.js'
    ],


    plugins: [
      'karma-*',
      'karma-coverage',
      'karma-growl-reporter',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-opera-launcher',
      'karma-firefox-launcher',
      'karma-chrome-launcher'
    ],


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    frameworks: ['jasmine'],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit'
    reporters: ['dots', 'growl'],


    reportSlowerThan: 50,


    // enable / disable watching file and executing tests
    // whenever any file changes
    autoWatch: true,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
