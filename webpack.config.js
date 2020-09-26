var Encore = require("@symfony/webpack-encore");

// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore.setOutputPath("public/build/")
  .setPublicPath("/build")
  .enableReactPreset()
  .enablePostCssLoader(
    function(options) {
      options.config = {
        path: 'postcss.config.js'
      }}
  )
  .enableSassLoader()
  // only needed for CDN's or sub-directory deploy
  //.setManifestKeyPrefix('build/')
  .addEntry("app", "./assets/src/index.tsx")
  .enableTypeScriptLoader(function (tsConfig) {})
  .enableForkedTypeScriptTypesChecking()
  .splitEntryChunks()
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  // enables hashed filenames (e.g. app.abc123.css)
  .enableVersioning(Encore.isProduction())

  // enables @babel/preset-env polyfills
  .configureBabel(() => {}, {
    useBuiltIns: "usage",
    corejs: 3,
  });

module.exports = Encore.getWebpackConfig();
