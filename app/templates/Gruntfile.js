/*jslint node: true, indent: 2 */
'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg     : grunt.file.readJSON('package.json'),
    jshint  : {
      all     : ['package.json', 'Gruntfile.js', 'bower.json', 'harp.json', 'js/**/*.js']
    },
    browserify: {
      dist: {
        files: {
          'public/js/main.js': ['js/main.js']
        },
        options: {
          transform: [ 'browserify-shim' ]
        }
      }
    },
    uglify  : {
      target : {
        files : { 'public/js/main.min.js' : 'public/js/main.js' }
      },
      options: {
      }
    },
    clean : [ 'public/js/main.js' ]
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
    'jshint',
    'browserify',
    'uglify',
    'clean'
  ]);

};

