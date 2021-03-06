module.exports = function(grunt){
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-contrib-less");
  
  
  grunt.initConfig({
    nodemon: {
      dev: {
        script: "index.js"
      }
    },
    concurrent: {
      dev:{
        tasks: ["nodemon", "watch"],
        options: {
          logConcurrentOutput:true
        }
      }
    },
    autoprefixer:{
      dev: {
        flatten: true,
        expand: true,
        src: "src/css/*.css",
        dest: "build/css/"
      }
    },
    watch: {
      options: {
        livereload: 8080
      },
      css: {
        files: "build/css/**/*.css",
        tasks: ["autoprefixer"]
      },
      js: {
        files: "**/*.js"
      },
      less: {
        files: "**/*.less",
        tasks: ["less"]
      },
      html: {
        files: "**/*.html"
      }
    },
    less: {
      development: {
        files: {
          "build/css/style.css": "src/less/style.less"
        }
      }
    }
  });
  
  grunt.registerTask("default", ["concurrent"]);
  
};