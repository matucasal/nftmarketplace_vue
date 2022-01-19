// vue.config.js
module.exports = {
    css: {
        loaderOptions: {
          sass: {
            data: 
            `@import "~@/styles/_globalvars.scss";`
          },
          scss: {
            additionalData: `@import "~@/styles/_globalvars.scss";`
          },
        }
    }
}