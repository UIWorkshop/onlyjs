module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        watch:
            html:
                files: 'generator/html.js',
                tasks: 'html'
    grunt.loadNpmTasks 'grunt-contrib-watch'

    grunt.registerTask 'html', 'generate html', ()->
        html = eval grunt.file.read('generator/html.js')
        grunt.file.write 'outcome/index.html', html
    grunt.registerTask 'default', ['watch']