var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var postcssPresetEnv = require("postcss-preset-env");
var watch = require('gulp-watch');

//task para o sass
gulp.task("sass", function() {
  return gulp
    .src("./dist/sass/*.scss")
    .pipe(postcss([postcssPresetEnv(
		{ 
			browsers: 'last 1 versions',
			autoprefixer: { grid: true } 
		}
	)]))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./dist/local_css"));
});

gulp.task('watch', function () {
   gulp.watch('./dist/sass/main.scss', gulp.series('sass'));
});

gulp.task("default", function() {});
