module.exports = (grunt) => {
  grunt.initConfig({
    jshint: {
      files: ['*.js', 'client/js/*.js'],
      options: {
        esnext: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
};