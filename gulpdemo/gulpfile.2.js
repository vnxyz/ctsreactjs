var gulp = require('gulp');
var concat = require('gulp-concat')
var babel = require('gulp-babel')

gulp.task('compile', function(){
    gulp.src('./src/**/*.jsx')
    .pipe(babel({
        presets: ['react']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./js'))
})

gulp.task('default', ['compile'], function(){
    console.log('default task running');
})