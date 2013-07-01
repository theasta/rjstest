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
        curly: true,
        eqeqeq: false,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: false,
        boss: true,
        eqnull: true,
        node: true,
        browser: true,
        strict: true,
        predef: [ 'define', 'Mustache' ]
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
