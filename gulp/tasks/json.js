export const json = () => {
    return app.gulp.src(app.path.src.json)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Json",
                message: "Error: <%= error.message %>"
            })))
        .pipe(app.gulp.dest(app.path.build.json));
}