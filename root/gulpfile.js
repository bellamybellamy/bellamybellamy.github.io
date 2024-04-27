const gulp = require('gulp');
const livereload = require('gulp-livereload');

// Task to reload the browser
gulp.task('reload', function (done) {
    livereload.reload();
    done();
});

// Task to watch for changes
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['**/*.html', '**/*.css', '**/*.js'], gulp.series('reload'));
});

// Default task
gulp.task('default', gulp.series('watch'));
