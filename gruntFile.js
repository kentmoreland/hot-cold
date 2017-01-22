module.exports = (grunt) => {
  grunt.initConfig({
    jshint: {
      files: ['*.js', 'client/js/*.js'],
      options: {
        esnext: true,
      }
    },
    sass: {
      dist: {
        files: {
          'client/css/main.css' : 'client/css/main.scss'
        }
      }
    },
    watch: {
      css: {
       files: 'client/css/*.scss',
       tasks: ['sass'],
       options: {
        spawn: false,
       }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['watch']);
};