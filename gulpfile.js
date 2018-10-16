let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');

gulp.task("start",()=>{
	return gulp.src("css/main.scss")
		.pipe(sass({outputStyle:'compressed'}))
		.pipe(rename("style.css"))
		.pipe(gulp.dest("css"));
});

gulp.task('watch',()=>{
	gulp.watch('css/boostrap/**/*.scss',gulp.series('start'));
});