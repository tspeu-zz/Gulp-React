"use strict"

//import modules

var gulp = require('gulp');
var conn = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');

//configuration values
var config = {
    port: 5500,
    baseUrl : 'http://localhost',
    paths: {
        html :  './src/*.html',
        js:     './src/**/*.js',
        indexJs:'./src/index.js',
        css:    [
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        dist :  './dist'      
    }
}

//launch a local server for dev
gulp.task('conn', function(){
    conn.server({
        root :  ['dist'],
        port:   config.port,
        base:   config.baseUrl,
        livereload: true    
    });
})

//