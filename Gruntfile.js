const { path, name, completePath } = require("./component.config");

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist_sass: {
        src: ["./components/{,*/}/dist/sass/*.scss"],
        dest: "./source_files/style.scss"
      },
      dist_js: {
        src: ["./components/{,*/}/dist/js/*.js"],
        dest: "./source_files/index.js"
      }
    },
    sass: {
      // Task
      dist: {
        // Target
        options: {
          // Target options
          style: "compressed",
          sourcemap: "none"
        },
        files: {
          // Dictionary of files
          "deploy_files/Element/Portal_Conteudo/_staticfiles/elements/css/elements.min.css": "./source_files/*.scss" // 'destination': 'source'
        }
      }
    },

  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.registerTask("default", ["sass"]);
};
