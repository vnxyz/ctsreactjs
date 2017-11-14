var gulp = require('gulp');

gulp.task('copyhtml', function(){
    gulp.src('./src/*.html').pipe(gulp.dest('./dist'))
})

gulp.task('default', ['copyhtml'], function(){
    console.log('default task running');
})