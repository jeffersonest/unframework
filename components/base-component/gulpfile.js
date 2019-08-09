var gulp = require('gulp');
	var sass = require('gulp-sass');

	//task para o sass
	gulp.task('sass', function () {
   	 return gulp.src('./dist/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/local_css'));
	});

	gulp.task('default', function(){
		
	});