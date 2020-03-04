const browserSync = require("browser-sync").create();
const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");

gulp.task("css_example_1", function () {
  return gulp
    .src("src/assets/scss/example_1/app.scss")
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("example_1.css"))
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task("css_example_2_client", function () {
  return gulp
    .src("src/assets/scss/example_2/client/app.scss")
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("example_2_client.css"))
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task("css_example_2_admin", function () {
  return gulp
    .src("src/assets/scss/example_2/admin/app.scss")
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("example_2_admin.css"))
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task("css_example_3", function () {
  return gulp
    .src("src/assets/scss/example_3/app.scss")
    .pipe(sassGlob())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(rename("example_3.css"))
    .pipe(gulp.dest("public/assets/css"))
    .pipe(browserSync.stream());
});

gulp.task("images", function() {
  return gulp.src("src/assets/images/**/*")
    .pipe(gulp.dest("public/assets/images"))
})

let css_task = ("css_example_1", "css_example_2_admin", "css_example_2_client", "css_example_3");

gulp.task("watch", function () {
  browserSync.init({
    server: {
        baseDir: "./public"
    }
  });

  gulp.watch("src/assets/scss/**/*",
    gulp.parallel(css_task)
  );

  gulp.watch("public/*.html").on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel(css_task, "watch"));
