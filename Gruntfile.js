module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        // A single entry point for our app
        src: 'fe/app/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'static/app/app.js',
      },
    },
    watch: {
      js: {
          files: 'fe/**',
          tasks: ['browserify', 'copy'],
          options: {
              spawn: false
          }
      }
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'fe/',
        src: ['**/*.html', '**/*.css', 'vendor/**', 'bootstrap/**'],
        dest: 'static/',
      },
    },
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  // grunt.loadNpmTasks('grunt-watchify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify', 'copy', 'watch']);
};
