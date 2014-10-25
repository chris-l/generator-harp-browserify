/*jslint node: true, indent: 2 */
'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg     : grunt.file.readJSON('package.json'),
    <% if (useJSLint) { %>jslint  : {
      all     : {
        src : ['package.json', 'Gruntfile.js', 'bower.json', 'harp.json', 'js/**/*.js'],
        directives : {
          indent : 2,
          node : true
        }
      }
    },<% } else { %>jshint  : {
      all     : ['package.json', 'Gruntfile.js', 'bower.json', 'harp.json', 'js/**/*.js']
    },<% } %>
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
  grunt.loadNpmTasks('<% if (useJSLint) { %>grunt-jslint<% } else { %>grunt-contrib-jshint<% } %>');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', [
    '<% if (useJSLint) { %>jslint<% } else { %>jshint<% } %>',
    'browserify',
    'uglify',
    'clean'
  ]);

};

