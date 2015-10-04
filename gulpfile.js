/* File: gulpfile.js */

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var less = require('gulp-less');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');


// Compile Our LESS code 

gulp.task('less', function() {
    return gulp.src('less/bootstrap.less')
        .pipe(less())
        .pipe(uncss({
            html: [
                '*.html',
                'fractals/*.html'
            ],
            ignore: [
                /^\.navbar/,
                /^\.col-/,
                /^\.fa-play/
            ]
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'));
}); 


// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(
            [
              'js/jquery.js',
              'js/bootstrap.min.js',
              'js/jquery.easing.min.js',
              'js/bootstrap-switch.min.js',
              'js/classie.js',
              'js/cbpAnimatedHeader.js',
              'js/freelancer.js',
              'js/jqBootstrapValidation.js',
              'js/contact_me.js'
            ]
        )
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes and recompile as necessary
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('less/*.less', ['less']);
});

// Default Task
gulp.task('default', ['less', 'scripts', 'watch']);


