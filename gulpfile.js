var gulp = require('gulp');
var zip = require('gulp-zip');
var clean = require('gulp-clean');

var p = require('./package.json');
var zipFileName = p.name + '-' + p.version + '.zip'

gulp.task('clean', function(){
    return gulp.src(['zip'])
    .pipe(clean());
});

gulp.task('zip', function() {
    gulp.src('dist/**/*')
    .pipe(zip(zipFileName))
    .pipe(gulp.dest('zip/'+p.version));
});

gulp.task('stageForArtifactory', ['clean', 'zip']);
