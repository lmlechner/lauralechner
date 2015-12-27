var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./scss/*.scss")
        .pipe(sass())
        .pipe(sass({
              errLogToConsole: true
              }))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"))
});

gulp.task('default', ['sass']);
