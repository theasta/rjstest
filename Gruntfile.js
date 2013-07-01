'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      gruntfile: [
        'Gruntfile.js'
      ],
      source: [
        'server.js',
        'public-dev/scripts/**/*.js',
        '!public-dev/scripts/vendors/**/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      tests: {
        files: ['<%= jshint.source %>', '<%= jshint.gruntfile %>'],
        tasks: ['jshint'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['test']);

};
