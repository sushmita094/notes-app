module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dev: {
        files: {
          "styles/main.css": "styles/main.scss",
        },
      },
    },
    watch: {
      sass: {
        files: "styles/main.scss", // ** any directory; * any file
        tasks: ["css"],
        options: {
          livereload: 4000, // 35729 is the default port === true
        },
      },
    },
  });

  grunt.registerTask("default", ["sass"]);
  grunt.registerTask("css", ["sass"]);

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
