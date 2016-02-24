var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//sass
gulp.task('sass', function() {
	gulp.src('./sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
//pipe to autoprefixer
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./css'));
});

//watch
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch', 'sass'])