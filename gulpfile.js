/**
 * Created by precocity on 10/7/16.
 */
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');


gulp.task('default', function() {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(concat('app/css/style.css'))
})

/**
 * Created by precocity on 10/7/16.
 */
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var merge = require('merge-stream');


gulp.task('default', function () {
    var lessStream = gulp.src('app/less/**/*.less')
    .
    pipe(less())
        .pipe(concat('less-files.less'))
    ;

    var scssStream = gulp.src('app/scss/**/*.scss')
    .
    pipe(sass())
        .pipe(concat('scss-files.scss'))
    ;

    var cssStream = gulp.src('app/css/css/**/*.css')
    .
    pipe(concat('css-files.css'))
    ;

    var mergedStream = merge(lessStream, scssStream, cssStream)
        .pipe(concat('style.css'))
        .pipe(minify())
        .pipe(gulp.dest('app/css'));

    return mergedStream;
});