module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['styles']
                },
                files: {
                    'dist/css/style.css': 'less/style.less'
                }
            }
        },
        watch: {
            files: ['less/*.less'],
            tasks: ['less']
        }
    });
};
