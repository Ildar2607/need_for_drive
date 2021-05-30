module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/style.sass"; `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-project/'
        : '/',
}